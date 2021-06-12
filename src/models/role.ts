import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Role is a required field']
    }
});

export default model('Role', RoleSchema);