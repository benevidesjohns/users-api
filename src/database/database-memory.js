import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #users = new Map()

    list() {
        return Array
            .from(this.#users.entries())
            .map(([id, user]) => ({ id, ...user }))
    }

    create(user) {
        const userId = randomUUID()

        this.#users.set(userId, user)
    }

    update(id, user) {
        this.#users.set(id, user)
    }

    delete(id) {
        return this.#users.delete(id)
    }
}