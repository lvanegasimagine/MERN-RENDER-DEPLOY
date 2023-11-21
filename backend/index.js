import express from 'express'
import cors from 'cors'
import pg from 'pg'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, FRONTEND_URL, PORT } from './config.js'

const app = express()
const pool = new pg.Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT
})
app.use(cors({
    origin: FRONTEND_URL
}))
app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    res.status(200).json({ pong: result.rows[0].now })
})

app.listen(PORT, () => {
    console.log('Server online')
})