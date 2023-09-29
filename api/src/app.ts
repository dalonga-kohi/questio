import express, { Express, Router } from 'express'
const app: Express = express()
export const router: Router = Router()

app.use('/api/v1/', router)

export default app
