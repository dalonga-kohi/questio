import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const connection = mysql
  .createPool({
    host: process.env.MYSQL_HOST || '127.0.0.1',
    user: process.env.MYSQL_LOGIN || 'root',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || 'questio',
  })
  .promise()

export const dataTable = 'users_data'
export const usersTable = 'users'
export const questsTable = 'quests'
export const storageTable = 'quests_storage'
export const friendsTable = 'friends'
export const invTable = 'invitations'

export async function checkDB() {
  try {
    await connection.query(`SELECT * FROM ${dataTable} LIMIT 1 `)
  } catch (error) {
    console.log('Warning: Server is not connected to the database')
  }
}
