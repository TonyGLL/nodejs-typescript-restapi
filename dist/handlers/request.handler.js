"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestHandlers {
    static Handler(res, code, message) {
        res.status(code).json(RequestHandlers.evolve(message));
    }
    static evolve(inData) {
        switch (typeof inData) {
            case 'string':
                inData = {
                    data: inData
                };
                break;
            case 'object':
                if (inData[0]) {
                    inData = {
                        data: [...inData]
                    };
                }
                else {
                    inData = {
                        data: Object.assign({}, inData)
                    };
                }
                break;
        }
        return inData;
    }
}
exports.default = RequestHandlers.Handler;
