import {Router} from 'express';
const router:Router = Router();
import {userController} from '../controllers/user.controller';
import { ValidateCreate } from '../validators/user';



router.post('/singup', ValidateCreate, userController.singUp);
router.post('/singin', userController.singIn);
router.get('/singout', userController.singOut);

module.exports =  router