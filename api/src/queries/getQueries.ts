import {
  connection,
  dataTable,
  friendsTable,
  questsTable,
  storageTable,
  usersTable,
} from '../database/connection'
import Account from '../models/account.model'
import Quest from '../models/quest.model'
import User from '../models/user.model'
import Storage from '../models/storage.model'
import { getUID, parseToInt } from '../utils/utils'

const QUEST_BASE = `SELECT ${questsTable}.*, ${dataTable}.user_name as author_name FROM ${questsTable} INNER JOIN ${dataTable} ON ${questsTable}.author_id=${dataTable}.id`

export async function getUsers(page: number, count: number): Promise<User[]> {
  if (page < 1) page = 1
  if (count < 0) count = 1
  const start = (page - 1) * count

  const res = await connection.query<User[]>(
    `SELECT * FROM ${dataTable} LIMIT ?, ?`,
    [start, count],
  )
  return res[0]
}

export async function getUser(id: number): Promise<User> {
  const res = await connection.query<User[]>(
    `SELECT ${dataTable}.*,COUNT(CASE WHEN ${friendsTable}.follower_id=${dataTable}.id THEN 1 END) AS follows,COUNT(CASE WHEN ${friendsTable}.target_id=${dataTable}.id THEN 1 END) AS followers FROM ${dataTable} INNER JOIN ${friendsTable} ON 1=1 WHERE ${dataTable}.id=?`,
    [id],
  )
  return res[0][0]
}

export async function getAccount(id: number): Promise<Account> {
  const res = await connection.query<Account[]>(
    `SELECT ${usersTable}.*, ${dataTable}.user_name, ${dataTable}.avatar, COUNT(CASE WHEN ${friendsTable}.follower_id=${dataTable}.id THEN 1 END) AS follows,COUNT(CASE WHEN ${friendsTable}.target_id=${dataTable}.id THEN 1 END) AS followers FROM ${usersTable} INNER JOIN ${dataTable} ON ${usersTable}.id=${dataTable}.user_id INNER JOIN ${friendsTable} ON 1=1 WHERE ${usersTable}.id=?`,
    [id],
  )
  return res[0][0]
}

export async function getQuests(
  page: number,
  count: number,
  category: string | undefined,
  query: string,
): Promise<Quest[]> {
  if (page < 1) page = 1
  if (count < 0) count = 1
  const start = (page - 1) * count

  if (query) {
    query = `%${query}%`
    const search = await connection.query<Quest[]>(
      `${QUEST_BASE} WHERE title LIKE ? OR tags LIKE ? ORDER BY title LIMIT ?, ?`,
      [query, query, start, count],
    )
    return search[0]
  }

  let res = []

  switch (category) {
    case 'popular':
      res = await connection.query<Quest[]>(`${QUEST_BASE} LIMIT ?, ?`, [
        start,
        count,
      ])
      return res[0]
    default:
      res = await connection.query<Quest[]>(`${QUEST_BASE} LIMIT ?, ?`, [
        start,
        count,
      ])
      return res[0]
  }
}

export async function getQuest(id: number): Promise<Quest> {
  const res = await connection.query<Quest[]>(
    `SELECT ${questsTable}.*, ${dataTable}.user_name as author_name, COUNT(CASE WHEN ${storageTable}.quest_id=${questsTable}.id THEN 1 END) as enrolled, COUNT(CASE WHEN ${storageTable}.is_done=1 THEN 1 END) as achieved FROM ${questsTable} INNER JOIN ${dataTable} ON ${questsTable}.author_id=${dataTable}.id INNER JOIN ${storageTable} ON ${storageTable}.quest_id=${questsTable}.id WHERE ${questsTable}.id=?`,
    [id],
  )
  return res[0][0]
}

export async function getStorage(id: number): Promise<Storage[]> {
  const uid = await getUID(id)
  if (uid[0] != 200) return []
  const res = await connection.query<Storage[]>(
    `
  SELECT ${storageTable}.is_done,${dataTable}.user_name as author_name , ${storageTable}.image_done, ${questsTable}.* FROM ${storageTable}
  INNER JOIN ${questsTable} ON ${questsTable}.id=${storageTable}.quest_id
  INNER JOIN ${dataTable} ON ${questsTable}.author_id = ${dataTable}.id
  WHERE ${storageTable}.user_id=?`,
    [uid[1]],
  )
  return res[0]
}

export async function getFollowers(
  id: number,
  page: number,
  count: number,
  isSelf: boolean = false,
): Promise<User[]> {
  if (page < 1) page = 1
  if (count < 0) count = 1
  const start_index = (page - 1) * count
  if (isSelf) {
    const uid = await getUID(id)
    if (uid[0] != 200) return []
    id = parseToInt(uid[1])
  }
  const res = await connection.query<User[]>(
    `SELECT user_name, avatar FROM ${dataTable} WHERE id IN (SELECT follower_id FROM ${friendsTable} WHERE target_id=?) LIMIT ?, ?`,
    [id, start_index, count],
  )

  return res[0]
}

export async function getFollows(
  id: number,
  page: number,
  count: number,
  isSelf: boolean = false,
): Promise<User[]> {
  if (page < 1) page = 1
  if (count < 0) count = 1
  const start_index = (page - 1) * count
  if (isSelf) {
    const uid = await getUID(id)
    if (uid[0] != 200) return []
    id = parseToInt(uid[1])
  }
  const res = await connection.query<User[]>(
    `SELECT user_name, avatar FROM ${dataTable} WHERE id IN (SELECT target_id FROM ${friendsTable} WHERE follower_id=?) LIMIT ?, ?`,
    [id, start_index, count],
  )

  return res[0]
}

export async function getUserByName(name: string): Promise<User> {
  const res = await connection.query<User[]>(
    `SELECT ${dataTable}.*,COUNT(CASE WHEN ${friendsTable}.follower_id=${dataTable}.id THEN 1 END) AS follows,COUNT(CASE WHEN ${friendsTable}.target_id=${dataTable}.id THEN 1 END) AS followers FROM ${dataTable} INNER JOIN ${friendsTable} ON 1=1 WHERE ${dataTable}.user_name=?`,
    [name],
  )
  return res[0][0]
}
