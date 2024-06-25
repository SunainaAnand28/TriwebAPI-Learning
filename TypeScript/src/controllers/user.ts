import { Request, Response } from 'express';

import {addusertoDB,updateuserdata} from '../models/user';

const registeruser = (req: Request, res: Response) => {
    //fetch data from req 
    // validation
    // normalize
    const username : string = "Sunaina";
    const password : string = "12345";
    const age : number = 12;
    const result = addusertoDB(username, password, age);
    res.send(result);
    // task and code
}

const updateuser = (req: Request, res: Response) => {
   const myuser = {
        id:1,
        uname: "Sunaina",
        password:"12345",
        age: 19
   }


   const result = updateuserdata(myuser);
   res.send(result); 
}


export {registeruser,updateuser};