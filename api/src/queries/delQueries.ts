import { ResultSetHeader } from 'mysql2'
import { Message } from '../data/types'
import {
  connection,
  dataTable,
  friendsTable,
  questsTable,
  storageTable,
  usersTable,
} from '../database/connection'
import { getUID, remFile } from '../utils/utils'
import Quest from '../models/quest.model'
import User from '../models/user.model'

export async function deleteFollow(id: number, tid: number): Promise<Message> {
  const uid = await getUID(id)
  if (uid[0] != 200) return uid
  const res = await connection.query<ResultSetHeader>(
    `DELETE ${friendsTable} FROM ${friendsTable} WHERE follower_id=? AND target_id=?`,
    [uid[1], tid],
  )
  if (!res[0].affectedRows) return [404, 'Target not found']
  return [200, 'success']
}

export async function deleteQuest(id: number, qid: number): Promise<Message> {
  const uid = await getUID(id)
  if (uid[0] != 200) return uid
  const prev = await connection.query<Quest[]>(
    `SELECT image FROM ${questsTable} WHERE author_id=? AND id=?`,
    [uid[1], qid],
  )
  if (!prev[0][0]) return [404, 'Quest not found']
  const img = prev[0][0].image?.split('/api/v1/img/')[1]
  remFile(img)
  await connection.query<ResultSetHeader>(
    `DELETE FROM ${storageTable} WHERE quest_id=?`,
    [qid],
  )
  await connection.query<ResultSetHeader>(
    `DELETE FROM ${questsTable} WHERE ${questsTable}.author_id=? AND ${questsTable}.id=?`,
    [uid[1], qid],
  )

  return [200, 'success']
}

export async function deleteAccount(id: number): Promise<Message> {
  const uid = await getUID(id)
  if (uid[0] != 200) return uid
  const prev = await connection.query<User[]>(
    `SELECT avatar FROM ${dataTable} WHERE user_id=?`,
    [id],
  )
  if (prev[0][0]) {
    const img = prev[0][0].avatar?.split('/api/v1/img/')[1]
    remFile(img)
  }
  await connection.query<ResultSetHeader>(
    `DELETE FROM ${friendsTable} WHERE follower_id=? OR target_id=?`,
    [uid[1], uid[1]],
  )
  await connection.query<ResultSetHeader>(
    `DELETE FROM ${storageTable} WHERE user_id=?`,
    [uid[1]],
  )
  const res = await connection.query<ResultSetHeader>(
    `DELETE FROM ${dataTable} WHERE user_id=?`,
    [id],
  )
  if (!res[0].affectedRows) return [404, 'User not found']
  const res2 = await connection.query<ResultSetHeader>(
    `DELETE FROM ${usersTable} WHERE id=?`,
    [id],
  )
  if (!res2[0].affectedRows) return [500, 'Internal error']

  return [200, 'success']
}

export async function deleteStorage(id: number, qid: number): Promise<Message> {
  const uid = await getUID(id)
  if (uid[0] != 200) return uid
  const res = await connection.query<ResultSetHeader>(
    `DELETE FROM ${storageTable} WHERE user_id=? AND quest_id=?`,
    [uid[1], qid],
  )
  if (!res[0].affectedRows) return [404, 'Quest not found']
  return [200, 'success']
}
