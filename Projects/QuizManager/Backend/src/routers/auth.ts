import  express  from "express";
import {registeruser, loginUser} from "../controllers/auth";

const router = express.Router();



//  post /auth/
router.post("/",registeruser);

// login /auth/login
router.post('/login', loginUser);

export default router;