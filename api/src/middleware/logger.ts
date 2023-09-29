import { Request, Response, NextFunction } from 'express'

export default function logger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const browser = req.headers['user-agent']
    ? req.headers['user-agent'].split(' ')
    : 'unknown'

  console.log(`--------------------------------------------------------`)
  console.log(`[*]New ${req.method} request from: ${req.ip}`)
  console.log(`[*]Browser: ${browser[0]}`)
  console.log(`[*]Path: ${req.url}`)
  console.log(`--------------------------------------------------------`)
  res.status(200)
  next()
}
