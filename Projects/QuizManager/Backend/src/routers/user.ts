import  express  from "express";

import {getUser, updateUser} from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

// user should be authenticated
// user sgould be authorized 

// get/user/:userId
router.get("/:userId", isAuthenticated,
    getUser); 

// user should be authenticated
// user sgould be authorized 

// put /user/
router.put("/",isAuthenticated, updateUser);


export default router;
