"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCartCreate = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = require("../helpers/validateHelper");
exports.ShopCartCreate = [
    (0, express_validator_1.check)('user_id')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    (0, express_validator_1.check)('shop_id')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    (0, express_validator_1.check)('products')
        .exists()
        .not()
        .notEmpty()
        .isArray(),
    (req, res, next) => {
        (0, validateHelper_1.validateResult)(req, res, next);
    }
];
