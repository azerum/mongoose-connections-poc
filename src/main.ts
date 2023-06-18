import { connect, disconnect } from 'mongoose'
import { UserModel } from './User'
import { connectionString } from './connectionString'
import readline from 'readline'

async function main() {
    await connect(connectionString, { 
        minPoolSize: 10,
        maxPoolSize: 10
    })

    const promises: Promise<void>[] = []

    for (let i = 0; i < 10; ++i) {
        promises.push(selectUsers(i))
    }

    await Promise.all(promises)

    async function selectUsers(no: number) {
        const users = await UserModel.find({})
        console.log(`${no}: ${Date.now()} (users=${users.length})`)
    }
}

process.once('SIGINT', async () => {
    await disconnect()
})

console.log(process.pid)

const rl = readline.createInterface(process.stdin, process.stdout)

rl.once('line', () => {
    rl.close()
    main()
})
