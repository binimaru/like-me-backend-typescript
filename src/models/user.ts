import { Schema, model } from 'mongoose';

type Role = 'admin' | 'user';

export interface User {
    name: string,
    email: string,
    password: string,
    role: Role
}

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

export default model('User', UserSchema);