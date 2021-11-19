import {Router} from 'express';
const router:Router = Router();
import {shopCartContrller} from '../controllers/shopcart.controllers';
import { ShopCartCreate } from '../validators/shopcart';
import { TokenValidation } from './../helpers/validateToken';


router.post('/', ShopCartCreate, shopCartContrller.createShopCart);

module.exports =  router