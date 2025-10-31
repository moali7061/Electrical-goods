import {Client} from 'pg';
import pg from 'pg';

const db = new pg.Client({
    user: 'postgres',
    password: 'ZoZoZoZo1234',
    host: 'localhost',
    port: 5432,
    database: 'school'
})

db.connect().then(console.log("connected to the database"));

export default db;