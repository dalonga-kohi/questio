import { router } from '../app'
import { Request, Response } from 'express'
import cors from 'cors'
import corsOptions from '../data/cors'
import {
  generateToken,
  isAuthorized,
  parseToInt,
  uploadFile,
  validateFields,
  validateQuest,
} from '../utils/utils'
import {
  addFollow,
  addQuest,
  addStorage,
  login,
  register,
} from '../queries/postQueries'

router.post(
  '/login/',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    if (req.body.parsedToken) {
      res.send({ response: 'logged in' })
      return
    }

    const row = await login(req.body.email, req.body.password)

    res.status(row[0])
    if (row[0] == 200) {
      res.cookie('token', generateToken(`${row[1]}`), {
        httpOnly: true,
        maxAge: 10080 * (60 * 1000),
      }) // maxAge: 7 days
      res.send({ response: 'logged in' })
    } else {res.send({response: row[1]})}
  },
)

router.post(
  '/account/quests/',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const auth = isAuthorized(id)
    if (auth[0] != 200) {
      res.status(auth[0])
      res.send({ error: auth[1] })
      return
    }
    const qid = parseToInt(req.body.quest_id)
    const msg = await addStorage(id, qid)

    res.status(msg[0])
    res.send({ response: msg[1] })
  },
)

router.post(
  '/register/',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const email = req.body.email || ''
    const username = req.body.username || ''
    const password = req.body.password || ''
    let prefs: string = req.body.preferences || ''
    prefs = prefs.toLowerCase()
    const emailreg = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-].{1,255}$/, 'gm')

    if(!emailreg.test(email))
      res.status(400).send('Invalid email')

    const validated = await validateFields(username, password, prefs)
    if (validated[0] != 200) {
      res.status(validated[0])
      res.send({ error: validated[1] })
      return
    }
    const msg = await register(email, username, password, prefs)
    res.status(msg[0])
    res.send({ response: msg[1] })
  },
)

router.post(
  '/follows/',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const auth = isAuthorized(id)
    if (auth[0] != 200) {
      res.status(auth[0])
      res.send({ error: auth[1] })
      return
    }
    const tid = parseToInt(req.body.target_id)
    const msg = await addFollow(id, tid)

    res.status(msg[0])
    res.send({ response: msg[1] })
  },
)

router.post(
  '/quests/',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const auth = isAuthorized(id)
    if (auth[0] != 200) {
      res.status(auth[0])
      res.send({ error: auth[1] })
      return
    }
    if (!req.files) {
      res.status(400).json({ error: 'No file uploaded' })
      return
    }
    const image = req.files.image
    const title = req.body.title || ''
    const description = req.body.description || ''
    let steps: string = req.body.steps || ''
    let tags: string = req.body.tags || ''
    steps = steps.toLowerCase()
    tags = tags.toLowerCase()

    const quest = {
      title: title,
      desc: description,
      tags: tags,
      steps: steps,
      imgPath: '',
    }
    const val = await validateQuest(quest)
    if (val[0] != 200) {
      res.status(val[0]).send({ error: val[1] })
      return
    }
    const path = await uploadFile(image)
    const msg = await addQuest(id, quest, path)

    res.status(msg[0])
    res.send({ response: msg[1] })
  },
)
