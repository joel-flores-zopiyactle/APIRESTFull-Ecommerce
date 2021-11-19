import { Request, Response } from 'express'
import modelShopCart, { ICartShop } from './../models/shopCart';


class ShopCartContrller {

    /**
     * createShopCart
     */
    public async createShopCart(req:Request, res: Response) {
        
        try {
            
            const shopCart: ICartShop = new modelShopCart({
                user_id: req.body.user_id,
                shop_id: req.body.shop_id,
                products: req.body.products
            });
    
            const shopCartSave = await shopCart.save()
    
            res.status(201).json({data : shopCartSave});

        } catch (error) {
            
            console.log(error);
            
        }

    }

}

export const shopCartContrller = new ShopCartContrller();