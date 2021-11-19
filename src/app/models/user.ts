import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs'

// Interface del usuario
export interface IUser extends Document {
    name:string;
    lastName:string;
    age:number;
    address:string;
    email:string;
    password:string;
    phone:number;
    encryptPassword(password:string): Promise<string>;
    validatePassword(password:string): Promise<boolean>;
}

// Modelo del usuario
const userSchema = new Schema({
    name:  {
        type: String,
        required: true,
        min: 3
    }, 
    lastName: {
        type: String,
        required: true
    },
    age:   {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: { 
        type:String,
        required: true
     },
    email: {
        type:String,
        unique: true,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    phone: {
        type:Number
    }
},
{
    timestamps: true,
    versionKey: false
});

userSchema.methods.encryptPassword = async (password:string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

userSchema.methods.validatePassword = async function (password:string): Promise<boolean> {
    return await bcrypt.compare(password,this.password)
}

export default model<IUser>('user', userSchema);