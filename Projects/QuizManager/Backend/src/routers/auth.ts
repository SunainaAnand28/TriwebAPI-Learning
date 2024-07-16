import  express  from "express";
import {registeruser, loginUser} from "../controllers/auth";
import { body } from "express-validator";


const router = express.Router();



//  post /auth/
router.post("/",[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:4})
    .withMessage("Please enter a valid name, minimum 4 character long")
],registeruser);

// login /auth/login
router.post('/login', loginUser);

export default router;