import jwt from 'jsonwebtoken'
import { Field, IQuest, Message } from '../data/types'
import sharp from 'sharp'
import { PATH } from '..'
import { UploadedFile } from 'express-fileupload'
import fs from 'fs'
import { join, resolve } from 'path'
export function parseToInt(num: string | undefined): number {
  if (!num) return -1

  try {
    return eval(num)
  } catch (e) {
    return -1
  }
}

export function generateToken(id: string): string {
  const secret = process.env.TOKEN_SECRET || ''
  return jwt.sign({ id: id }, secret, { expiresIn: '7d' })
}

export const field = [
  'name',
  'avatar',
  'preferences',
  'email',
  'password',
  'nofield',
] as const
export const isField = (x: Field) => field.includes(x)

/* eslint-disable no-useless-escape */
const fieldRegexs = new Map<string, RegExp>()
fieldRegexs.set('user_name', new RegExp(/^[a-z0-9_\-]+$/))
fieldRegexs.set('preferences', new RegExp(/^[a-z;].{1,100}$/))
fieldRegexs.set(
  'password',
  new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
)

export async function validateFields(
  username: string,
  password: string,
  prefs: string,
): Promise<Message> {
  const nameRegex = fieldRegexs.get('user_name') || new RegExp('')
  const passRegex = fieldRegexs.get('password') || new RegExp('')
  const prefRegex = fieldRegexs.get('preferences') || new RegExp('')
  if(username.length < 5 || username.length > 20)
    return [400, 'Username must be between 5 and 20 characters']
  if (!nameRegex.test(username)) {
    return [
      400,
      "Username can only contain alphanumeric symbols and '_' or '-'",
    ]
  }
  if (password.length < 8 || password.length > 60) {
    return [400, 'Password length can only be between 8-60']
  }
  if (!passRegex.test(password)) {
    return [
      400,
      'Password should contain at least one symbol, upper and lower case and a number',
    ]
  }
  if (!prefRegex.test(prefs) || prefs.length < 1 || prefs.length > 100) {
    return [400, 'Preferences are in wrong format']
  }

  return [200, '']
}

export function validatePatchField(fieldName: string, data: string): Message {
  if (fieldName == 'avatar') return [200, '']
  const reg = fieldRegexs.get(fieldName)
  if (!reg) return [400, 'Invalid field name']

  if (!reg.test(data)) return [400, 'Wrong payload format']

  return [200, '']
}

export const isAuthorized = (id: number): Message => {
  if (id == -1) return [403, 'Unable to authorize']
  return [200, '']
}

export async function uploadFile(
  file: UploadedFile | UploadedFile[] | undefined,
): Promise<string | undefined> {
  if (!file || Array.isArray(file)) return undefined
  if (file.size > 6291456) return undefined //6291456 = 6MB
  try {
    const optimizedImage = await sharp(file.data)
      .jpeg({ quality: 80 })
      .toBuffer()

    const timestamp = new Date().getTime()
    const randomString = Math.random().toString(36).substring(2, 15)
    const outputPath = join(PATH, `${timestamp}-${randomString}.jpg`)
    const relPath = `/api/v1/img/${timestamp}-${randomString}.jpg`
    fs.writeFileSync(outputPath, optimizedImage)
    return relPath
  } catch (error) {
    return undefined
  }
}

export function remFile(fileName: string | undefined): boolean {
  if (!fileName) return false
  const file = resolve(PATH, fileName)
  let flag = true
  if (!fs.existsSync(file)) return false
  fs.unlink(file, (err) => {
    if (err) flag = false
  })
  return flag
}

const questRegexs = new Map<string, RegExp>()
questRegexs.set('title', new RegExp(/^[A-Za-z0-9].{4,20}$/))
questRegexs.set('tags', new RegExp(/^[a-z;\-].{2,65}$/))
questRegexs.set('steps', new RegExp(/^[a-z;].{2,255}$/))

export async function validateQuest(quest: IQuest): Promise<Message> {
  const titleRegex = questRegexs.get('title') || new RegExp('')
  const tagsRegex = questRegexs.get('tags') || new RegExp('')
  const stepsRegex = questRegexs.get('steps') || new RegExp('')

  if (!quest.desc) return [400, 'Wrong description format']
  if (!titleRegex.test(quest.title)) return [400, 'Wrong title format']
  if (!tagsRegex.test(quest.tags)) return [400, 'Wrong tags format']
  if (!stepsRegex.test(quest.steps)) return [400, 'Wrong steps format']
  if (quest.desc.length < 10 || quest.desc.length > 400)
    return [400, 'Description length must be between 10 and 400 characters']

  return [200, '']
}
