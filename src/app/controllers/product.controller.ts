import { Request, Response } from 'express'
import modelProduct, { IProduct } from './../models/product';

class ProductController {

    /**
     * Create product
     */
    public async createProduct(req:Request, res: Response) {

        try {

            //TODO: Se crea el modelo
            const product: IProduct = new modelProduct({
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                urlImage: req.body.urlImage               
            });
    
            // TODO: Se gurda el producto a la BD
            const productSave = await product.save();
    
            // TODO: Si todo es success se regresa los datos al usuario
            res.status(201).json({
                data: productSave
            })

        } catch (error) {

            console.log(error);
            
        }

    }

    /**
     * Get all products
     */
    public async getProducts(req:Request, res: Response) {

        try {
            
            const products = await modelProduct.find({})

            res.status(200).json({ data: products })

        } catch (error) {
            console.log(error);
            
        }

    }

    /**
     * Get product by ID
     */
    public async getProduct(req:Request, res: Response) {
        try {
            
            const product = await modelProduct.findById({_id: req.params.id})

            res.status(200).json({ data: product })

        } catch (error) {
            console.log(error);
            
        }
    }

    /**
     * Update product by ID
     */
    public updateProduct(req:Request, res: Response) {
        
    }

    /**
     * Delete product by ID
     */
    public deleteProduct(req:Request, res: Response) {
        
    }

}

export const productController = new ProductController();