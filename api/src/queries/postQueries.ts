import {
  connection,
  dataTable,
  friendsTable,
  questsTable,
  storageTable,
  usersTable,
} from '../database/connection'
import Account from '../models/account.model'
import hash from 'bcrypt'
import User from '../models/user.model'
import { ResultSetHeader } from 'mysql2'
import { IQuest, LoginMsg, Message } from '../data/types'
import Quest from '../models/quest.model'
import { getUID } from '../utils/utils'

export async function login(mail: string, pass: string): Promise<LoginMsg> {
  const res = await connection.query<Account[]>(
    `SELECT id, password, verified FROM ${usersTable} WHERE email=?`,
    [mail],
  )
  if (!res[0][0]) return [404, 'User not found', 0]
  const isPassword = await hash.compare(pass, res[0][0].password as string)
  if (!isPassword) return [400, "Password and email don't match", 0]

  if (!res[0][0].verified) return [400, 'Not verified', 0]
  return [200, 'logged in', res[0][0].id as number]
}

export async function register(
  email: string,
  name: string,
  pass: string,
  prefs: string,
): Promise<Message> {
  const checkEmail = await connection.query<Account[]>(
    `SELECT id FROM ${usersTable} WHERE email=?`,
    [email],
  )
  const checkName = await connection.query<User[]>(
    `SELECT id FROM ${dataTable} WHERE user_name=?`,
    [name],
  )

  if (checkEmail[0][0]) return [400, 'Email already taken']
  if (checkName[0][0]) return [400, 'Username already taken']
  const hashed = await hash.hash(pass, 8)
  if (!hashed) return [500, 'Internal Error']
  const res = await connection.query<ResultSetHeader>(
    `INSERT INTO ${usersTable} (email, password, preferences) VALUES (?, ?, ?)`,
    [email, hashed, prefs ? prefs : ''],
  )

  if (!res[0].affectedRows) return [500, 'Internal Error']

  const userId = res[0].insertId
  const res2 = await connection.query<ResultSetHeader>(
    `INSERT INTO ${dataTable} (user_id, user_name) VALUES (?, ?)`,
    [userId, name],
  )

  if (!res2[0].affectedRows) return [500, 'Internal Error']
  return [200, 'New user created']
}

export async function addStorage(id: number, qid: number): Promise<Message> {
  const uid = await getUID(id)
  if (uid[0] != 200) return uid
  const quest = await connection.query<Quest[]>(
    `SELECT id FROM ${questsTable} WHERE id=?`,
    [qid],
  )
  if (!quest[0][0]) return [404, 'Quest not found']

  const res = await connection.query<ResultSetHeader>(
    `INSERT INTO ${storageTable} (user_id, quest_id) VALUES (?, ?)`,
    [uid[1], qid],
  )
  if (!res[0].affectedRows) return [500, 'Internal error']
  return [200, 'success']
}

export async function addFollow(id: number, tid: number): Promise<Message> {
  const uid = await getUID(id)
  if (uid[0] != 200) return uid
  const quest = await connection.query<Quest[]>(
    `SELECT id FROM ${dataTable} WHERE id=?`,
    [tid],
  )
  if (!quest[0][0]) return [404, 'Target not found']

  const res = await connection.query<ResultSetHeader>(
    `INSERT INTO ${friendsTable} (follower_id, target_id) VALUES (?, ?)`,
    [uid[1], tid],
  )
  if (!res[0].affectedRows) return [500, 'Internal error']
  return [200, 'success']
}

export async function addQuest(
  id: number,
  data: IQuest,
  path: string | undefined,
): Promise<Message> {
  if (!path) return [400, 'File not found']
  const uid = await getUID(id)
  if (uid[0] != 200) return uid

  const res = await connection.query<ResultSetHeader>(
    `
  INSERT INTO ${questsTable} (author_id, title, description, tags, steps, image) VALUES (?, ?, ?, ?, ?, ?)`,
    [uid[1], data.title, data.desc, data.tags, data.steps, path],
  )

  if (!res[0].affectedRows) return [500, 'Internal error']
  return [200, 'success']
}
