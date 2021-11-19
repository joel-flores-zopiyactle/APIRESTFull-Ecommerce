"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Modelo del 
const shopSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 4
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('shop', shopSchema);
