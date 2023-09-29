import { field } from '../utils/utils'

export type Categories =
  | 'latest'
  | 'popular'
  | 'recommended'
  | 'beginner'
  | 'advanced'
  | ''

export type Table =
  | 'users'
  | 'users_data'
  | 'quests'
  | 'friends'
  | 'invitations'
  | 'quests_storage'
  | ''

export type Field = (typeof field)[string]

export type Message = [number, string]

export type LoginMsg = [number, string, number]

export interface IQuest {
  title: string
  desc: string
  tags: string
  steps: string
}
