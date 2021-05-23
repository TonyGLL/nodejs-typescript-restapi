"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const users_routes_1 = require("../users/users.routes");
exports.mainRouter = express_1.Router();
exports.mainRouter
    .use(users_routes_1.usersRouter);
