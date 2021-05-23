"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envelope = void 0;
const envelope = (objectData) => {
    if (Array.isArray(objectData)) {
        return { data: objectData };
    }
    return { data: Object.assign({}, objectData) };
};
exports.envelope = envelope;
