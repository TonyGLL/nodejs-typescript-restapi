"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envelop_1 = require("../helpers/envelop");
const handlers_1 = require("../helpers/handlers");
const users_service_1 = __importDefault(require("./users.service"));
class usersController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let usersService = '';
                let queryParams = req.query;
                if (queryParams) {
                    usersService = yield users_service_1.default.getUsersByFilters(queryParams);
                }
                else {
                    usersService = yield users_service_1.default.getAllUsers();
                }
                const resData = handlers_1.Handlers.dataHandler(usersService[1], usersService[0]);
                res.status(resData.code).json(envelop_1.envelope(resData.data));
            }
            catch (error) {
                const resError = handlers_1.Handlers.errorHandler(error, 'BAD_REQUEST');
                res.status(resError.code).json(envelop_1.envelope(resError.data));
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = req.params.id;
                let usersService = yield users_service_1.default.getuserById(userId);
                const resData = handlers_1.Handlers.dataHandler(usersService[1], usersService[0]);
                res.status(resData.code).json(envelop_1.envelope(resData.data));
            }
            catch (error) {
                const resError = handlers_1.Handlers.errorHandler(error, 'BAD_REQUEST');
                res.status(resError.code).json(envelop_1.envelope(resError.data));
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = req.body;
                let usersService = '';
                usersService = yield users_service_1.default.createUser(user);
                const resData = handlers_1.Handlers.dataHandler(usersService[1], usersService[0]);
                res.status(resData.code).json(envelop_1.envelope(resData.data));
            }
            catch (error) {
                const resError = handlers_1.Handlers.errorHandler(error, 'BAD_REQUEST');
                res.status(resError.code).json(envelop_1.envelope(resError.data));
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = req.body;
                let userId = req.params.id;
                let usersService = yield users_service_1.default.updateUser(user, userId);
                const resData = handlers_1.Handlers.dataHandler(usersService[1], usersService[0]);
                res.status(resData.code).json(envelop_1.envelope(resData.data));
            }
            catch (error) {
                const resError = handlers_1.Handlers.errorHandler(error, 'BAD_REQUEST');
                res.status(resError.code).json(envelop_1.envelope(resError.data));
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = req.params.id;
                let usersService = yield users_service_1.default.deleteUser(userId);
                const resData = handlers_1.Handlers.dataHandler(usersService[1], usersService[0]);
                res.status(resData.code).json(envelop_1.envelope(resData.data));
            }
            catch (error) {
                const resError = handlers_1.Handlers.errorHandler(error, 'BAD_REQUEST');
                res.status(resError.code).json(envelop_1.envelope(resError.data));
            }
        });
    }
}
exports.default = new usersController();
