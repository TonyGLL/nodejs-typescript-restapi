import { validationResult } from 'express-validator';
import Role from '../models/role';
import User from '../users/users.model';

class DBValidator {
    public async isValidRole(role: string = ''): Promise<any> {
        const existsRole = await Role.findOne({ name: role });
        if (!existsRole) {
            throw new Error(`Role '${role}' is no registered on BD`);
        }
    }

    public async isEmailExists(email: string): Promise<any> {
        const existsEmail = await User.findOne({ email });
        if (existsEmail) {
            throw new Error(`Email '${email}' already exists.`);
        }
    }

    public async isValidId(id: string): Promise<any> {
        const existsId = await User.findById(id);
        if (!existsId) {
            throw new Error(`Id '${id}' is invalid`);
        }
    }
}

export default new DBValidator();