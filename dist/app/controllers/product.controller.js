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
exports.productController = void 0;
const product_1 = __importDefault(require("./../models/product"));
class ProductController {
    /**
     * Create product
     */
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //TODO: Se crea el modelo
                const product = new product_1.default({
                    name: req.body.name,
                    category: req.body.category,
                    price: req.body.price,
                    urlImage: req.body.urlImage
                });
                // TODO: Se gurda el producto a la BD
                const productSave = yield product.save();
                // TODO: Si todo es success se regresa los datos al usuario
                res.status(201).json({
                    data: productSave
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     * Get all products
     */
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_1.default.find({});
                res.status(200).json({ data: products });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     * Get product by ID
     */
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_1.default.findById({ _id: req.params.id });
                res.status(200).json({ data: product });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     * Update product by ID
     */
    updateProduct(req, res) {
    }
    /**
     * Delete product by ID
     */
    deleteProduct(req, res) {
    }
}
exports.productController = new ProductController();
