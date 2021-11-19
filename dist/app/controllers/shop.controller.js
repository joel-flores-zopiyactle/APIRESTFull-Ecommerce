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
exports.shopController = void 0;
const shop_1 = __importDefault(require("./../models/shop"));
class ShopController {
    /**ShopController
     * Create shop
     */
    createShop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //TODO: Se crea el modelo
                const shop = new shop_1.default({
                    name: req.body.name,
                    address: req.body.address
                });
                // TODO: Se gurda el producto a la BD
                const shopSave = yield shop.save();
                // TODO: Si todo es success se regresa los datos al usuario
                res.status(201).json({
                    data: shopSave
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     * Get all shops
     */
    getShops(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shops = yield shop_1.default.find({});
                res.status(200).json({ data: shops });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     * Get shop by ID
     */
    getShop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shop_id = req.params.id;
                const shop = yield shop_1.default.findById({ _id: shop_id });
                res.status(201).json({ data: shop });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     * Update shop by ID
     */
    updateShop(req, res) {
    }
    /**
     * Delete shop by ID
     */
    deleteShop(req, res) {
    }
}
exports.shopController = new ShopController();
