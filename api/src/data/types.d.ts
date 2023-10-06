import { field } from '../utils/utils'

export type Categories =
  | 'latest'
  | 'popular'
  | 'recommended'
  | 'beginner'
  | 'advanced'
  | ''

export type Field = (typeof field)[string]

export type Message = [number, unknown]

export interface IQuest {
  title: string
  desc: string
  tags: string
  steps: string
}
