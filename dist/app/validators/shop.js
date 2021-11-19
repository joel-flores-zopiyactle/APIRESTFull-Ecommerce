"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCreate = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = require("../helpers/validateHelper");
exports.ShopCreate = [
    (0, express_validator_1.check)('name')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    (0, express_validator_1.check)('address')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    (req, res, next) => {
        (0, validateHelper_1.validateResult)(req, res, next);
    }
];
