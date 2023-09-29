import { router } from '../app'
import { Request, Response } from 'express'
import cors from 'cors'
import corsOptions from '../data/cors'
import { patchAccount, patchAvatar } from '../queries/patchQueries'
import {
  isField,
  parseToInt,
  uploadFile,
  validatePatchField,
} from '../utils/utils'

router.patch(
  '/account/:field',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const id = parseToInt(req.body.parsedToken)
    const field = isField(req.params.field) ? req.params.field : 'nofield'
    const payload = req.body.payload
    if (id == -1) {
      res.status(403)
      res.send({ error: 'Unable to authorize' })
      return
    }

    const validation = validatePatchField(field, payload)
    if (validation[0] != 200) {
      res.status(validation[0])
      res.send({ error: validation[1] })
      return
    }
    if (field == 'avatar') {
      if (!req.files) {
        res.status(400).json({ error: 'No file uploaded' })
        return
      }
      const image = req.files.image
      const path = await uploadFile(image)
      const msg = await patchAvatar(id, path)
      res.status(msg[0]).send({ response: msg[1] })
      return
    }
    const result = await patchAccount(id, field, payload)
    res.status(result[0])
    res.send({ response: result[1] })
  },
)
