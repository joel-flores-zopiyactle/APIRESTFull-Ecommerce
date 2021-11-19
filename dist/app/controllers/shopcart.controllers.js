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
exports.shopCartContrller = void 0;
const shopCart_1 = __importDefault(require("./../models/shopCart"));
class ShopCartContrller {
    /**
     * createShopCart
     */
    createShopCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shopCart = new shopCart_1.default({
                    user_id: req.body.user_id,
                    shop_id: req.body.shop_id,
                    products: req.body.products
                });
                const shopCartSave = yield shopCart.save();
                res.status(201).json({ data: shopCartSave });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.shopCartContrller = new ShopCartContrller();
