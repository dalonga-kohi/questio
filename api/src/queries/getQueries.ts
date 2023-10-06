import User from '../database/models/user'
import { Op } from 'sequelize'
import Quest from '../database/models/quest'
import StorageLog from '../database/models/storagelog'
import Friend from '../database/models/friend'

export async function getUsers(page: number, count: number): Promise<User[]> {
  if (page < 1) page = 1
  if (count < 0) count = 1
  const start = (page - 1) * count
  try {
    const res = await User.findAll({
      offset: start,
      limit: count,
      attributes: ['id', 'name', 'avatar']
    })
    return res
  } catch (error) {
    return []
  }
}

export async function getUser(id: number): Promise<User | null> {
  try {
    const res = await User.findByPk(id, {
      attributes: ['id', 'name', 'avatar']
    })
    return res?.dataValues
  } catch (error) {
    return null
  }
}

export async function getAccount(id: number): Promise<User | null> {
 try {
  const res = await User.findByPk(id)
  return res?.dataValues
 } catch (error) {
  return null
 }
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
  const params = {
    offset: start,
    limit: count
  }
  try {
    if (query) {
      query = `%${query}%`
      const search = Quest.findAll({
        ...params,
        where: {
          title: {[Op.like]: query}
        }
      })
      return search
    }

    let res = []

    switch (category) {
      case 'popular':
        res = await Quest.findAll({
          ...params,
        })
        return res
      default:
        res = await Quest.findAll(params)
        return res
    }
  } catch (error) {
    return []
  }
}

export async function getQuest(id: number): Promise<Quest | null> {
  try {
    const res = await Quest.findByPk(id)
    return res?.dataValues
  } catch (error) {
    return null
  }
}

export async function getStorage(id: number): Promise<StorageLog[]> {
  try {
    const res = await StorageLog.findAll({
      where: {
        userId: id
      }
    })
    return res
  } catch (error) {
    return []
  }
}

export async function getFollowers(
  id: number,
  page: number,
  count: number,
): Promise<User[]> {
  if (page < 1) page = 1
  if (count < 0) count = 1
  const start = (page - 1) * count

  try {
    const res = await Friend.findAll({
      where: {
        targetId: id
      },
      attributes: ['followerId'],
      offset: start,
      limit: count
    })
    return res
  } catch (error) {
    return []
  }
}

export async function getFollows(
  id: number,
  page: number,
  count: number,
): Promise<User[]> {
  if (page < 1) page = 1
  if (count < 0) count = 1
  const start = (page - 1) * count
  try {
    const res = await Friend.findAll({
      where: {
        followerId: id
      },
      attributes: ['targetId'],
      offset: start,
      limit: count
    })
    return res
  } catch (error) {
    return []
  }
}

export async function getUserByName(name: string): Promise<User | null> {
  try {
    const res = await User.findOne({where: {
      name: name
      },
      attributes: ['id', 'name', 'avatar']
    })
    return res
  } catch (error) {
    return null
  }
}
