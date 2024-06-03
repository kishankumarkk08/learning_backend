import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

//When data comes through form
app.use(express.json({ limit: "16kb" })) //When data comes through form

//When data comes through url
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))

export { app }
