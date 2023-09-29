import { RowDataPacket } from 'mysql2'

export default interface Account extends RowDataPacket {
  id?: number
  email?: string
  password?: string
  preferences?: string
  verified?: boolean
  premium?: boolean
  user_name?: string
  follows?: number
  followers?: number
  avatar?: string
  creation_date?: string
}
