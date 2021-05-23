import { Router } from 'express';
import usersController from './users.controller';

export const usersRouter = Router();

usersRouter
    .get('/users', usersController.getUsers)
    .get('/users/:id', usersController.getUser)
    .post('/users', usersController.createUser)
    .put('/users/:id', usersController.updateUser)
    .delete('/users/:id', usersController.deleteUser);