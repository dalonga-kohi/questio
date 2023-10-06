import hash from 'bcrypt'
import { IQuest, Message } from '../data/types'
import User from '../database/models/user'
import StorageLog from '../database/models/storagelog'
import Friend from '../database/models/friend'
import Quest from '../database/models/quest'
import { Op } from 'sequelize'

export async function login(mail: string, pass: string): Promise<Message> {
  try {
    const res = await User.findOne({
      where: {
        email: mail,
      },
    })

    const id = res?.getDataValue('id')
    if (!id) return [404, 'Email not found']

    const isPass = await hash.compare(pass, res?.getDataValue('password'))
    if (!isPass) return [404, 'Email and password does not match']

    return [200, id]
  } catch (error) {
    return [500, 'Internal error']
  }
}

export async function register(
  email: string,
  name: string,
  pass: string,
  prefs: string,
): Promise<Message> {
  try {
    const hashed = await hash.hash(pass, 8)
    const [, created] = await User.findOrCreate({
      where: {
        [Op.or]: {
          email: email,
          name: name,
        },
      },
      defaults: {
        email: email,
        password: hashed,
        name: name,
        preferences: prefs,
      },
    })
    if (!created) return [400, 'User already exists']
  } catch (error) {
    return [500, 'Internal error']
  }
  return [200, 'New user created']
}

export async function addStorage(id: number, qid: number): Promise<Message> {
  try {
    const [, created] = await StorageLog.findOrCreate({
      where: {
        ownerId: id,
        questId: qid,
      },
      defaults: {
        ownerId: id,
        questId: qid,
      },
    })
    if (!created) return [400, 'Quest already in storage']
  } catch (error) {
    return [500, 'Internal error']
  }

  return [200, 'success']
}

export async function addFollow(id: number, tid: number): Promise<Message> {
  try {
    const [, created] = await Friend.findOrCreate({
      where: {
        followerId: id,
        targetId: tid,
      },
      defaults: {
        followerId: id,
        targetId: tid,
      },
    })
    if (!created) return [400, 'Already followed']
  } catch (error) {
    return [500, 'Unable to follow']
  }
  return [200, 'success']
}

export async function addQuest(
  id: number,
  data: IQuest,
  path: string | undefined,
): Promise<Message> {
  if (!path) return [404, 'File not found']

  try {
    const [, created] = await Quest.findOrCreate({
      where: {
        authorId: id,
        title: data.title,
      },
      defaults: {
        authorId: id,
        title: data.title,
        description: data.desc,
        image: path,
        steps: data.steps,
        tags: data.tags,
      },
    })
    if (!created) return [400, 'Quest already exists']
  } catch (_) {
    return [500, 'Internal error']
  }

  return [200, 'success']
}
