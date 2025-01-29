import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    async list() {
        let users = await sql`SELECT id, name, email FROM users`

        return users
    }

    async create(user) {
        const userId = randomUUID()
        const { name, email, password } = user

        await sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${userId}, ${name}, ${email}, ${password})
        `
    }

    async update(id, user) {
        const { name, email, password } = user

        await sql`
            UPDATE users set 
            name = ${name},
            email = ${email},
            password = ${password}
            WHERE id = ${id}
        `
    }

    async delete(id) {
        await sql`
            DELETE FROM users
            WHERE id = ${id}
        `
    }
}