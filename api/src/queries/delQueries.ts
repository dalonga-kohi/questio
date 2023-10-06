import { Message } from '../data/types'
import { remFile } from '../utils/utils'
import Friend from '../database/models/friend'
import Quest from '../database/models/quest'
import StorageLog from '../database/models/storagelog'
import User from '../database/models/user'

export async function deleteFollow(id: number, tid: number): Promise<Message> {
  try {
    const count = await Friend.destroy({
      where: {
        followerId: id,
        targetId: tid
      }
    })
    if(!count) return [404, 'Target not found']
  } catch (error) {
    return [500, 'Unable to delete']
  }
  return [200, 'success']
}

export async function deleteQuest(id: number, qid: number): Promise<Message> {
  try {
    const prev = await Quest.findOne({
      where: {
        id: qid,
        authorId: id
      }
    })
    if(!prev) return [404, 'Quest not found']

    const img = prev.getDataValue('image').split('/api/v1/img/')[1]
    remFile(img)

    await StorageLog.destroy({
      where: {questId: qid}
    })
    await Quest.destroy({
      where: {id: qid}
    })
  } catch (error) {
    return [500, 'Unable to delete']
  }
  return [200, 'success']
}

export async function deleteAccount(id: number): Promise<Message> {
  try {
    const user = await User.findByPk(id)
    if(!user) return [404, 'User not found']

    const img = user.getDataValue('avatar').split('/api/v1/img/')[1]
    remFile(img)

    await Friend.destroy({
      where: {id: id}
    })
    await StorageLog.destroy({
      where: {ownerId: id}
    })
    await User.destroy({
      where: {
        id: id
      }
    })
  } catch (error) {
    return [500, 'Unable to delete']
  }
  return [200, 'success']
}

export async function deleteStorage(id: number, qid: number): Promise<Message> {
  try {
    const count = await StorageLog.destroy({
      where: {
        ownerId: id,
        questId: qid
      }
    })
    if(!count) return [404, 'Quest not found']
  } catch (error) {
    return [500, 'Unable to delete']
  }
  return [200, 'success']
}
