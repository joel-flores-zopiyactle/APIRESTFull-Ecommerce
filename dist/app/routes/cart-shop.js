"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const shopcart_controllers_1 = require("../controllers/shopcart.controllers");
const shopcart_1 = require("../validators/shopcart");
const validateToken_1 = require("./../helpers/validateToken");
router.post('/', validateToken_1.TokenValidation, shopcart_1.ShopCartCreate, shopcart_controllers_1.shopCartContrller.createShopCart);
module.exports = router;
