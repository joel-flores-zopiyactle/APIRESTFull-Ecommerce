import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'

 export const ValidateCreate = [

    check('name')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    check('lastName')
        .exists()
        .not()
        .notEmpty()
        .isString(),   
    check('age')
        .exists()
        .not()
        .notEmpty()
        .isNumeric(),
    check('address')
        .exists()
        .not()
        .notEmpty()
        .isString(),    
    check('email')
        .exists()
        .not()
        .notEmpty()
        .isEmail(),  
    check('address')
        .exists()
        .not()
        .notEmpty()
        .isString(), 
    check('phone')
        .exists()
        .not()
        .notEmpty()
        .isNumeric(),         
     
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }

]