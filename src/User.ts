import { Schema, model } from 'mongoose'

export interface IUser {
    name: string
    age: number
}

export const userSchema = new Schema<IUser>({
    name: String,
    age: Number
})

export const UserModel = model('User', userSchema)
