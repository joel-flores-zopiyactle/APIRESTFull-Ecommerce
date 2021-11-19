"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Modelo del tienda
const cartSchema = new mongoose_1.Schema({
    user_id: {
        type: String,
        required: true,
    },
    products: [{
            product_id: String
        }],
    shop_id: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('cartShop', cartSchema);
