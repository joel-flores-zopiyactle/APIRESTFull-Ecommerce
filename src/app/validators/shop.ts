import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'

 export const ShopCreate = [

    check('name')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    check('address')
        .exists()
        .not()
        .notEmpty()
        .isString(),               
     
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }

]