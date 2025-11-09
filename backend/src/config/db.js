import {Client} from 'pg';
import pg from 'pg';
import "dotenv/config"

const db = new pg.Client({
    user: 'postgres',
    password: process.env.db_key || 'ZoZoZoZo1234',
    host: 'localhost',
    port: 5432,
    database: 'school'
})

db.connect().then(console.log("connected to the database"));

export default db;