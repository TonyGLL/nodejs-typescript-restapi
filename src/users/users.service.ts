import { IUser } from '../users/users.model';

class usersServices {
    public async getAllUsers(): Promise<any> {
        try {
            return [
                'GET',
                {
                    users: []
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async getuserById(id: string): Promise<any> {
        try {
            return [
                'GET',
                {
                    id
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async createUser(user: IUser): Promise<any> {
        try {
            return [
                'POST',
                {
                    user
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async updateUser(user: string, id: string): Promise<any> {
        try {
            return [
                'PUT',
                {
                    user
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async deleteUser(id: string): Promise<any> {
        try {
            return [
                'DELETE',
                {
                    id: 'asldkjalds',
                    user: 'asldkjalds'
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async getUsersByFilters(queries: any): Promise<any> {
        const {
            size,
            page = '1'
        } = queries;
        try {
            return [
                'GET',
                {
                    size,
                    page
                }
            ];
        } catch (error) {
            return error;
        }
    }
}

export default new usersServices();