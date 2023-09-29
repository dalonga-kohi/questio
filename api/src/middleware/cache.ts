import { Request, Response, NextFunction } from 'express'

export default function setCache(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const getPeriod = 30 * 1

  switch (req.method) {
    case 'GET':
      res.set('Cache-control', `public, max-age=${getPeriod}`)
      break
    default:
      res.set('Cache-control', `public, max-age=2`)
      break
  }

  next()
}
