import mysql from 'mysql/promise';
import 'dotenv/config'

const connection = mysql.createConnection({
    host: process.env.CHAT_AI_DB_HOAT,
    user: process.env.CHAT_AI_DB_USER,
    password: process.env.CHAT_AI_DB_PASS,
    database: process.env.CHAT_AI_DB_NAME,
    port: Number(process.env.CHAT_AI_DB_PORT),
    waitForConnections: true,
})