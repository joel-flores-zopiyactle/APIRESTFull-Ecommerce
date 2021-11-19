import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'

 export const ShopCartCreate = [
    check('shop_id')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    check('products')
        .exists()
        .not()
        .notEmpty()
        .isArray(),                   
     
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }

]