import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'

 export const ProductCreate = [

    check('name')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    check('category')
        .exists()
        .not()
        .notEmpty()
        .isString(),   
    check('price')
        .exists()
        .not()
        .notEmpty()
        .isDecimal(),
    check('urlImg')
        .exists()
        .not()
        .notEmpty()
        .isString(),             
     
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }

]