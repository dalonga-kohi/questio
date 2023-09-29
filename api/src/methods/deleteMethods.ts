import { router } from '../app'
import { Request, Response } from 'express'
import cors from 'cors'
import corsOptions from '../data/cors'
import { isAuthorized, parseToInt } from '../utils/utils'
import {
  deleteAccount,
  deleteFollow,
  deleteQuest,
  deleteStorage,
} from '../queries/delQueries'

router.delete(
  '/account',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const authorized = isAuthorized(id)
    if (authorized[0] != 200) {
      res.status(authorized[0])
      res.send({ error: authorized[1] })
      return
    }

    const deleted = await deleteAccount(id)

    res.status(deleted[0])
    res.send({ response: deleted[1] })
  },
)

router.delete(
  '/follows/:tid',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const authorized = isAuthorized(id)
    if (authorized[0] != 200) {
      res.status(authorized[0])
      res.send({ error: authorized[1] })
      return
    }
    const tid = parseToInt(req.params.tid)
    const deleted = await deleteFollow(id, tid)

    res.status(deleted[0])
    res.send({ response: deleted[1] })
  },
)

router.delete(
  '/quests/:qid',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const authorized = isAuthorized(id)
    if (authorized[0] != 200) {
      res.status(authorized[0])
      res.send({ error: authorized[1] })
      return
    }
    const qid = parseToInt(req.params.qid)
    const deleted = await deleteQuest(id, qid)

    res.status(deleted[0])
    res.send({ response: deleted[1] })
  },
)

router.delete(
  '/account/quests/:qid',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const authorized = isAuthorized(id)
    if (authorized[0] != 200) {
      res.status(authorized[0])
      res.send({ error: authorized[1] })
      return
    }
    const qid = parseToInt(req.params.qid)
    const deleted = await deleteStorage(id, qid)

    res.status(deleted[0])
    res.send({ response: deleted[1] })
  },
)
