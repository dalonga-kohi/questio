import { router } from '../app'
import { Request, Response } from 'express'
import cors from 'cors'
import corsOptions from '../data/cors'
import {
  getAccount,
  getFollowers,
  getFollows,
  getQuest,
  getQuests,
  getStorage,
  getUser,
  getUserByName,
  getUsers,
} from '../queries/getQueries'
import { isAuthorized, parseToInt } from '../utils/utils'
import { PATH} from '..'
import path, { resolve } from 'path'
import user from '../database/models/user'

router.get('/users', cors(corsOptions), async (req: Request, res: Response) => {
  const page = parseToInt(req.query.page as string)
  const count = parseToInt(req.query.count as string)

  const rows = await getUsers(page, count)

  res.send({
    response: rows,
  })
})

router.get(
  '/users/:id',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.params.id)
    const meth = req.query.method
    let row: user | null
    if (meth == 'name' && req.params.id)
      row = await getUserByName(req.params.id)
    else row = await getUser(id)

    res.send({
      response: row,
    })
  },
)

router.get(
  '/account',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)

    if (!id || id === -1) {
      res.status(403)
      res.send({ error: 'Unable to authorize' })
      return
    }
    const row = await getAccount(id)
    res.send({
      response: row,
    })
  },
)

router.get(
  '/quests',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const page = parseToInt(req.query.page as string)
    const count = parseToInt(req.query.count as string)
    const cat = req.query.category as string
    const query = req.query.q as string
    const rows = await getQuests(page, count, cat, query)

    res.send({
      response: rows,
    })
  },
)

router.get(
  '/quests/:id',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.params.id)

    const rows = await getQuest(id)

    res.send({
      response: rows,
    })
  },
)

router.get(
  '/follows/:id',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const page = parseToInt(req.query.page as string)
    const count = parseToInt(req.query.count as string)
    const id = parseToInt(req.params.id)

    const rows = await getFollows(id, page, count)

    res.send({
      response: rows,
    })
  },
)

router.get(
  '/followers/:id',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const page = parseToInt(req.query.page as string)
    const count = parseToInt(req.query.count as string)
    const id = parseToInt(req.params.id)

    const rows = await getFollowers(id, page, count)

    res.send({
      response: rows,
    })
  },
)

router.get(
  '/follows',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const page = parseToInt(req.query.page as string)
    const count = parseToInt(req.query.count as string)
    const id = parseToInt(req.body.parsedToken)
    const authorized = isAuthorized(id)
    if (authorized[0] != 200) {
      res.status(authorized[0])
      res.send({ error: authorized[1] })
      return
    }
    const rows = await getFollows(id, page, count)

    res.send({
      response: rows,
    })
  },
)

router.get(
  '/followers',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const page = parseToInt(req.query.page as string)
    const count = parseToInt(req.query.count as string)
    const id = parseToInt(req.body.parsedToken)
    const authorized = isAuthorized(id)
    if (authorized[0] != 200) {
      res.status(authorized[0])
      res.send({ error: authorized[1] })
      return
    }
    const rows = await getFollowers(id, page, count)

    res.send({
      response: rows,
    })
  },
)

router.get(
  '/img/:id',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    try {
      res.sendFile(path.join(resolve(PATH, req.params.id)))
    } catch (error) {
      res.status(400)
      res.send({ error: error })
    }
  },
)

router.get(
  '/account/quests',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)

    if (!id || id === -1) {
      res.send({ error: 'Unable to authorize' })
      res.status(403)
    } else {
      const row = await getStorage(id)
      res.send({
        response: row,
      })
    }
  },
)
