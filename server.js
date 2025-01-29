import { fastify } from 'fastify'
// import { DatabaseMemory } from './database/database-memory.js'
import { DatabasePostgres } from './src/database/database-postgres.js'

const server = fastify()
// const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.post('/users', async (req, res) => {
    const { name, email, password } = req.body

    await database.create({
        name,
        email,
        password
    })

    return res
        .status(201)
        .send()
})

server.get('/users', async () => {
    const users = await database.list()

    return users
})

server.put('/users/:id', async (req, res) => {
    const userId = req.params.id
    const { name, email, password } = req.body

    await database.update(userId, {
        name,
        email,
        password
    })

    return res
        .status(204)
        .send()
})

server.delete('/users/:id', async (req, res) => {
    const userId = req.params.id

    await database.delete(userId)

    return res
        .status(204)
        .send()
})

server.listen({
    port: 3000
})