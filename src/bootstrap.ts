import { connect, disconnect } from 'mongoose';
import { IUser, UserModel } from './User';
import { connectionString } from './connectionString';

async function main() {
    const users: IUser[] = [
        { name: 'Bob', age: 0 },
        { name: 'Alice', age: 1 },
        { name: 'Jack', age: 2 },
        { name: 'Hannah', age: 3 }
    ]
    
    await connect(connectionString)
    
    try {
        for (const u of users) {
            const asModel = new UserModel(u)
            await asModel.save()
        }
    }
    finally {
        await disconnect()
    }
}

main()
