import { Field, Message } from '../data/types'
import hash from 'bcrypt'
import { remFile } from '../utils/utils'
import User from '../database/models/user'

export async function patchAccount(
  id: number,
  field: Field,
  data: string,
): Promise<Message> {
  if (field == 'password') data = await hash.hash(data, 8)

  try {
    if (field == 'email' && field == 'name') {
      const exists = await User.findOne({
        where: {
          [field]: data,
        },
      })
      if (exists) return [400, `${field} already taken`]
    }

    await User.update(
      { [field]: data },
      {
        where: {
          id: id,
        },
      },
    )
  } catch (error) {
    return [500, 'Internal Error']
  }
  return [200, 'success']
}

export async function patchAvatar(
  id: number,
  path: string | undefined,
): Promise<Message> {
  if (!path) return [400, 'File not found']
  try {
    const user = await User.findByPk(id)
    if (!user) return [404, 'User not found']

    const img = user.getDataValue('avatar').split('/api/v1/img/')[1]
    remFile(img)

    await User.update(
      { avatar: path },
      {
        where: { id: id },
      },
    )
  } catch (error) {
    return [500, 'Internal error']
  }
  return [200, 'File uploaded']
}
