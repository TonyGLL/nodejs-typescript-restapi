import { Router } from 'express';
import { usersRouter } from '../users/users.routes';

export const mainRouter = Router();

mainRouter
    .use(usersRouter);