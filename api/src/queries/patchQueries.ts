import { ResultSetHeader } from 'mysql2'
import { connection, dataTable, usersTable } from '../database/connection'
import { Field, Message } from '../data/types'
import hash from 'bcrypt'
import User from '../models/user.model'
import { getUID, remFile } from '../utils/utils'

export async function patchAccount(
  id: number,
  field: Field,
  data: string,
): Promise<Message> {
  let table = ''
  let idField = ''

  switch (field) {
    case 'nofield':
      return [400, 'Wrong field name']
    case 'user_name':
    case 'preferences':
      table = dataTable
      idField = 'user_id'
      break
    case 'password':
      data = await hash.hash(data, 8)
      table = usersTable
      idField = 'id'
      break
    case 'email':
      table = usersTable
      idField = 'id'
      break
    default:
      return [400, 'Wrong field name']
  }
  const check = await connection.query<User[]>(
    `SELECT ${field} FROM ${table} WHERE ${field}=?`,
    [data],
  )
  if (check[0][0]) return [400, 'Field duplicated']
  const res = await connection.query<ResultSetHeader>(
    `UPDATE ${table} SET ${field} = ? WHERE ${idField}=?`,
    [data, id],
  )
  if (!res[0].affectedRows) return [500, 'Internal error']
  return [200, 'success']
}

export async function patchAvatar(
  id: number,
  path: string | undefined,
): Promise<Message> {
  if (!path) return [400, 'File not found']
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
  const res = await connection.query<ResultSetHeader>(
    `UPDATE ${dataTable} SET avatar = ? WHERE user_id=?`,
    [path, id],
  )
  if (!res[0].affectedRows) [500, 'Internal error']
  return [200, 'File uploaded']
}
