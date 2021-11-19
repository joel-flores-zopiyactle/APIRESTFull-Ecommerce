import {Router} from 'express';
const router:Router = Router();
import {shopController} from '../controllers/shop.controller';
import { ShopCreate } from '../validators/shop';


router.post('/',ShopCreate, shopController.createShop);
router.get('/', shopController.getShops);
router.get('/:id', shopController.getShop);


module.exports =  router