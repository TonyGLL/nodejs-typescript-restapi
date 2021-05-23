import { Request, Response } from 'express';
import { envelope } from '../helpers/envelop';
import { Handlers } from '../helpers/handlers';

import { IUser } from '../users/users.model';
import service from './users.service';

class usersController {
    public async getUsers(req: Request, res: Response): Promise<void> {
        try {
            let usersService: any = '';
            let queryParams = req.query;
            if (queryParams) {
                usersService = await service.getUsersByFilters(queryParams);
            } else {
                usersService = await service.getAllUsers();
            }
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async getUser(req: Request, res: Response): Promise<any> {
        try {
            let userId: string = req.params.id;
            let usersService = await service.getuserById(userId);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async createUser(req: Request, res: Response): Promise<any> {
        try {
            let user: IUser = req.body;
            let usersService: any = '';
            usersService = await service.createUser(user);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async updateUser(req: Request, res: Response): Promise<any> {
        try {
            let user: any = req.body;
            let userId: any = req.params.id;
            let usersService = await service.updateUser(user, userId);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<any> {
        try {
            let userId: string = req.params.id;
            let usersService = await service.deleteUser(userId);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }
}

export default new usersController();