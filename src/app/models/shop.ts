import { Schema, model, Document } from 'mongoose';

// Interface del tiebda
export interface IShop extends Document {
    name:string;
    address:string;
}

// Modelo del 
const shopSchema = new Schema({
    name:  {
        type: String,
        required: true,
        min: 4
    }, 
    address: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model<IShop>('shop', shopSchema);