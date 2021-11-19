import { Request, Response } from 'express'
import modelShop, { IShop } from './../models/shop';

class ShopController  {

    /**ShopController
     * Create shop
     */
    public async createShop(req:Request, res: Response) {

        try {

            //TODO: Se crea el modelo
            const shop: IShop = new modelShop({
                name: req.body.name,
                address: req.body.address               
            });
    
            // TODO: Se gurda el producto a la BD
            const shopSave = await shop.save();
    
            // TODO: Si todo es success se regresa los datos al usuario
            res.status(201).json({
                data: shopSave
            })

        } catch (error) {

            res.status(500)
            res.send(error)
            
        }

    }

    /**
     * Get all shops
     */
    public async getShops(req:Request, res: Response) {

        try {
            
            const shops = await modelShop.find({})

            res.status(200).json({ data: shops })

        } catch (error) {
            res.status(500)
            res.send(error)
            
        }

    }

    /**
     * Get shop by ID
     */
    public async getShop(req:Request, res: Response) {
        
        try {

            const shop_id = req.params.id;

            const shop = await modelShop.findById({ _id: shop_id})
    
            res.status(201).json({data:shop});

        } catch (error) {

            res.status(500)
            res.send(error)
            
        }



    }

    /**
     * Update shop by ID
     */
    public updateShop(req:Request, res: Response) {
        
    }

    /**
     * Delete shop by ID
     */
    public deleteShop(req:Request, res: Response) {
        
    }

}

export const shopController = new ShopController();