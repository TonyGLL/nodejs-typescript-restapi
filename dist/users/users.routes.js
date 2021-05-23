"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = __importDefault(require("./users.controller"));
exports.usersRouter = express_1.Router();
exports.usersRouter
    .get('/users', users_controller_1.default.getUsers)
    .get('/users/:id', users_controller_1.default.getUser)
    .post('/users', users_controller_1.default.createUser)
    .put('/users/:id', users_controller_1.default.updateUser)
    .delete('/users/:id', users_controller_1.default.deleteUser);
