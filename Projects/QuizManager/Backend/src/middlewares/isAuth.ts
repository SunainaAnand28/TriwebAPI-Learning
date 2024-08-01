import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/error";

const isAuthenticated: RequestHandler = async (req, res, next) => {

  try {

    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const err = new ProjectError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }
    // jwt -> decode using sign "myprivatekey1234"

    const token = authHeader.split(' ')[1];
    console.log(token)

    let decodedToken: { userId: string, iat: Number, exp: Number };
    try {
      decodedToken = <any>jwt.verify(token, "myprivatekey1234");

    } catch (error) {
      const err = new ProjectError("No user exist");
      err.statusCode = 401;
      throw err;
    }

    if (!decodedToken) {
      const err = new ProjectError("No user exist");
      err.statusCode = 401;
      throw err;
    }
    // userId 
    req.userId = decodedToken.userId;

    //fetch user
    // req.user = user;
    console.log(decodedToken);
    next();


  }
  catch (error) {
    next(error)
  }
}

export { isAuthenticated };