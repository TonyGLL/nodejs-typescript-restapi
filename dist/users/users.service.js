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
Object.defineProperty(exports, "__esModule", { value: true });
class usersServices {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return [
                    'GET',
                    {
                        users: []
                    }
                ];
            }
            catch (error) {
                return error;
            }
        });
    }
    getuserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return [
                    'GET',
                    {
                        id
                    }
                ];
            }
            catch (error) {
                return error;
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return [
                    'POST',
                    {
                        user
                    }
                ];
            }
            catch (error) {
                return error;
            }
        });
    }
    updateUser(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return [
                    'PUT',
                    {
                        user
                    }
                ];
            }
            catch (error) {
                return error;
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return [
                    'DELETE',
                    {
                        id: 'asldkjalds',
                        user: 'asldkjalds'
                    }
                ];
            }
            catch (error) {
                return error;
            }
        });
    }
    getUsersByFilters(queries) {
        return __awaiter(this, void 0, void 0, function* () {
            const { size, page = '1' } = queries;
            try {
                return [
                    'GET',
                    {
                        size,
                        page
                    }
                ];
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = new usersServices();
