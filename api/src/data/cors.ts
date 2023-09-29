import dotenv from 'dotenv'

dotenv.config()

const corsOptions = {
  origin: process.env.CLIENT || 'http://localhost:5173',
  optionsSuccessStatus: 200,
}

export default corsOptions
