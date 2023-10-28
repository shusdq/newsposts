"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        email: { type: 'string', format: "email" },
        password: { type: 'string', minLength: 1 },
        // deleted: {type: "boolean"}
    },
    additionalProperties: true,
    required: ['email', 'password',],
};
exports.default = usersSchema;
