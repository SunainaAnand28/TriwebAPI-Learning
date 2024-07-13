import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const err = new Error("Not authenticated");
      // err.statusCode = 401;
      throw err;
    }
    // jwt -> decode using sign "myprivatekey1234"

    const token = authHeader.split(' ')[1];
    console.log(token)

    let decodedToken: { userId: String, iat: Number, exp: Number };
    try {
      decodedToken = <any>jwt.verify(token, "myprivatekey1234");

    } catch (error) {
      const err = new Error("Not authenticated");
      //err.statuscode = 401;
      throw err;
    }

    if (!decodedToken) {
      const err = new Error("Not authenticated");
      //err.statuscode = 401;
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