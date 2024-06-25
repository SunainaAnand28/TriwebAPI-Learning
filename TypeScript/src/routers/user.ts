import express from 'express';
import { Router } from 'express';
//import userController from '..controllers/user';

import { registeruser,updateuser } from '../controllers/user';



const router = express.Router();



router.post('/register', registeruser);
router.post('/update', updateuser);

export default  router;
