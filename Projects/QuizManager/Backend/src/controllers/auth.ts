import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken" ; 
import { validationResult } from "express-validator";

import User from "../models/user";
import ProjectError from "../helper/error";

interface ReturnResponse {
    status: "success" | "error";
    message: String,
    data: {} | []
}

// REGISTER
const registeruser = async (req: Request, res: Response, next: NextFunction) => {
    
    
    let resp: ReturnResponse;
    
    try {

        // Validation 
        const ValidationError = validationResult(req);

        //Validation end
        const email = req.body.email;
        const name = req.body.name;
        const password = await bcrypt.hash(req.body.password, 12);

        const user = new User({ email, name, password });
        const result = await user.save();

        if (!result) {
            resp = { status: "error",
                 message: "No results Found",
                  data: {}  ,
                 };
            res.send(resp);
        } else {
            resp = { status: "success", message: "Registration Done", data: { userId: result._id } };

            res.send(resp);
        }

    } catch (error) {
       next(error);
    }

};

// login 
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;

    try {
        const email = req.body.email;
        const password = req.body.password;

        // find your user with email 
        const user = await User.findOne({ email })

        if(!user){
            const err = new ProjectError("No user exist");
            err.statusCode = 401;
            throw err;
            
        }
        
        // verify user password using bycrypt
        const status = await bcrypt.compare(password, user.password);
        
        // then decide
        if (status){
            
            const token = jwt.sign({ userId : user._id}, "myprivatekey1234",{expiresIn: "1h"} );
            
            resp = { status: "success", message: "user logged in!", data: {token} };
            res.send(resp);

        } else {
            const err = new ProjectError("Credentials mismatch");
            err.statusCode = 401;
            throw err;
        }


    } catch (error) {
       next(error);
    }


}

const isUserExist = async (email:String) => {
    
  // find your user with email 
    const user = await User.findOne({ email })

    if(!user){
       return false;
    }
    return true;
}

export { registeruser, loginUser, isUserExist };