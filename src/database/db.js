import 'dotenv/config'
import postgres from 'postgres'

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env

export const sql = postgres({
    host: DB_HOST,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
})