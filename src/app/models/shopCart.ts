import { Schema, model, Document } from 'mongoose';

// Interface del tiebda
export interface ICartShop extends Document {
    user_id:string;
    products: IProductsID[];
    shop_id:string
}

interface IProductsID {
    product_id : string
}

// Modelo del tienda
const cartSchema = new Schema({
    user_id:  {
        type: String,
        required: true,
    }, 
    products:[{
        product_id: String
    }],
    shop_id : {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model<ICartShop>('cartShop', cartSchema);