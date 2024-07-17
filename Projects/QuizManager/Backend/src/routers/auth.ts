import express from "express";
import { registeruser, loginUser, isUserExist } from "../controllers/auth";
import { body } from "express-validator";
import ProjectError from "../helper/error";


const router = express.Router();



//  post /auth/
router.post("/", [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 4 })
        .withMessage("Please enter a valid name, minimum 4 character long"),
    body('email')
        .trim()
        .isEmail()
        .custom((emailID) => {
            return isUserExist(emailID)
                .then((status:Boolean) => {
                    if (status) {
                        const err = new ProjectError("User already exist!");
                        err.statusCode = 422;
                        throw err;
                    }
                })
                .catch((err) => {
                    return Promise.reject(err)
                })
        })
        .normalizeEmail(),
        body('password')
        .trim()
        .isLength({min:6})
        .withMessage('Enter atleast 6 character long password '),
        body('confirm_password')
        .trim()
        .custom((value:string, {req})=>{
            if(value != req.body.password){
                return Promise.reject("password mismatch!")
            }
            return true;
        })
    
], registeruser);

// login
// /auth/login
router.post('/login', loginUser);

export default router;