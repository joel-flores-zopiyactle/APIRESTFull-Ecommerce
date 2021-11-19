import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';

export interface IPayload {
    _id: string;
    iat: number;
    exp: string;
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.header('Authorization') || '';

    if (!token) return res.status(401).send({ error: 'Acceso no autorizado'})
    
    const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokenecommerce');
    
    console.log(payload);
    
    next()
}