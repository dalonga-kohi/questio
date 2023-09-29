import { RowDataPacket } from 'mysql2'

export default interface Quest extends RowDataPacket {
  id?: number
  title?: string
  description?: string
  image?: string
  author_name?: string
  steps?: string
  tags?: string
  enrolled?: number
  achieved?: number
  creation_date?: string
}
