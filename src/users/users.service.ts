import User from './users.model';
import bcryptjs from 'bcryptjs';

class usersServices {

    public async getUsersByFilters(queries: any): Promise<any> {
        const {
            size,
            page = '0'
        } = queries;
        const queryStatus = { status: true };
        try {
            const [users, total] = await Promise.all([
                User.find(queryStatus).limit(parseInt(size)).skip(parseInt(page)),
                User.countDocuments(queryStatus)
            ]);
            return [
                'GET',
                {
                    users,
                    page: parseInt(page),
                    totalRegs: total
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async getUserById(id: string): Promise<any> {
        try {
            const user = await User.findById(id);
            return [
                'GET',
                {
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        google: user.google,
                        status: user.status
                    }
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async createUser(user: any): Promise<any> {
        const {
            name,
            email,
            password,
            role
        } = user;
        const newUser = new User({ name, email, password, role });

        // Encrypt password
        const salt = bcryptjs.genSaltSync(10);
        newUser.password = bcryptjs.hashSync(password, salt);

        // Save data
        await newUser.save();
        try {
            return [
                'POST',
                {
                    user: {
                        id: newUser._id,
                        name: newUser.name,
                        email: newUser.email,
                        role: newUser.role,
                    }
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async updateUser(user: any, id: string): Promise<any> {
        try {

            const { _id, password, google, email, ...rest } = user;
            if (password) {
                // Encrypt password
                const salt = bcryptjs.genSaltSync(10);
                rest.password = bcryptjs.hashSync(password, salt);
            }
            const newUser = await User.findByIdAndUpdate(id, rest);
            return [
                'PUT',
                {
                    user: newUser
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async deleteUser(id: string): Promise<any> {
        try {
            const queryStatus = { status: false };
            const user = await User.findByIdAndUpdate(id, queryStatus);
            return [
                'DELETE',
                {
                    user
                }
            ];
        } catch (error) {
            return error;
        }
    }
}

export default new usersServices();