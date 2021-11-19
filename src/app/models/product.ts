import { Schema, model, Document } from 'mongoose';

// Interface del producto
export interface IProduct extends Document {
    name:string;
    category:string;
    price: number;
    urlImg: string,


}

// Modelo del producto
const productSchema = new Schema({
    name:  {
        type: String,
        required: true,
        min: 3
    }, 
    category: {
        type: String,
        required: true
    },
    price:   {
        type: Number,
        required: true
    },
    urlImage: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model<IProduct>('product', productSchema);