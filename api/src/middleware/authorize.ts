import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export default function authorize(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.cookies.token) {
    next()
    return
  }
  const token = req.cookies['token']
  const secret = process.env.TOKEN_SECRET || ''

  jwt.verify(token as string, secret, (err, user) => {
    if (err) {
      console.log('Failed to authorize')
      next()
      return
    }
    if (typeof user == 'object') {
      req.body.parsedToken = user.id
    }
  })

  next()
}
