import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import app, { router } from './app'
import logger from './middleware/logger'
import setCache from './middleware/cache'
import authorize from './middleware/authorize'
import fileUpload from 'express-fileupload'
import { checkDB } from './database/connection'
import { join, resolve } from 'path'
import fs from 'fs'

export const PATH = resolve('uploads')
dotenv.config()

//set all middlewares
app.use(logger)
router.use(express.urlencoded({ extended: true }))
router.use(express.json())
router.use(fileUpload())
router.use(cors())
router.use(setCache)
router.use(cookieParser())
router.use(authorize)
router.use(logger)
router.use(express.static(PATH))
import './methods/'

checkDB()

if(!fs.existsSync(join(PATH))) {
    fs.mkdirSync(PATH)
    console.log('Created new directory: ', PATH)
}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
