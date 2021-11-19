import { Request, Response } from 'express'
import modelShopCart, { ICartShop } from './../models/shopCart';
import jwt from 'jsonwebtoken';

class ShopCartContrller {

    /**
     * createShopCart
     */
    public async createShopCart(req:Request, res: Response) {
        
        try {

            const header = req.headers.authorization;
            const bearer = header?.toLowerCase().startsWith('bearer');
            
           if(bearer) {
                const token = header?.substring(7) || '';
                const payload:any = jwt.verify(token, process.env.TOKEN_SECRET || 'tokenecommerce');  
               
                const shopCart: ICartShop = new modelShopCart({
                    user_id: payload.id,
                    shop_id: req.body.shop_id,
                    products: req.body.products
                });
        
                const shopCartSave = await shopCart.save()
        
                res.status(201).json({data : shopCartSave});
                          
           }  
           
           res.status(200)
           res.send({
               data: 'Hay un error en el token, Falta la palabra bearer'
           })
            
            

        } catch (error) {
            
            res.status(500)
            res.send(error)
            
        }

    }

}

export const shopCartContrller = new ShopCartContrller();