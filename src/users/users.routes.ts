import { Router } from 'express';
import { check } from 'express-validator';
import DBValidator from '../helpers/db.validators';
import usersController from './users.controller';

export const usersRouter = Router();
usersRouter
    .get('/users', usersController.getUsers)
    .get('/users/:id', usersController.getUser)
    .post('/users',
        check('email', 'Invalid email').isEmail(),
        check('email').custom(DBValidator.isEmailExists),
        check('role').custom(DBValidator.isValidRole),
        usersController.createUser)
    .put('/users/:id',
        check('id', 'Invalid id').isMongoId(),
        check('id').custom(DBValidator.isValidId),
        check('role').custom(DBValidator.isValidRole),
        usersController.updateUser)
    .delete('/users/:id',
        check('id', 'Invalid id').isMongoId(),
        check('id').custom(DBValidator.isValidId),
        usersController.deleteUser);