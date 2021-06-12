import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is a required field']
    },
    email: {
        type: String,
        required: [true, 'Email is a required field'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is a required field']
    },
    image: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN', 'USER']
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

export default model('User', UserSchema);