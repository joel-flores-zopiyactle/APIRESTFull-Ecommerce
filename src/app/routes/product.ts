import {Router} from 'express';
const router:Router = Router();
import {productController} from '../controllers/product.controller';
import { ProductCreate } from '../validators/product';


router.post('/',ProductCreate, productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/id', productController.deleteProduct);

module.exports =  router