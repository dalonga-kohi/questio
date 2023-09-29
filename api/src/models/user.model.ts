import { RowDataPacket } from 'mysql2'

export default interface User extends RowDataPacket {
  id?: number
  user_id?: number
  user_name?: string
  avatar?: string
  follows?: number
  followers?: number
}
