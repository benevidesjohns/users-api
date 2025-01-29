import { sql } from './db.js'

// sql`
//     DROP TABLE IF EXISTS users;
// `.then(() => console.log('Table dropped'))

sql`
    CREATE TABLE users (
        id              TEXT PRIMARY KEY,
        name            VARCHAR(255) NOT NULL,
        email           VARCHAR(100) UNIQUE NOT NULL,
        password        TEXT NOT NULL
    );
`.then(() => console.log('Table created'))