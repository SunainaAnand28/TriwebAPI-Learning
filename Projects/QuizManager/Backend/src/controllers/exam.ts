import { Request, Response, NextFunction } from "express"

import Quiz from "../models/quiz";
import ProjectError from "../helper/error";


const startExam = async (req: Request, res: Response, next : NextFunction)=>{
   try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findById(quizId, {name:1, questions_list:1, is_published:1});
    if(!quiz){
      const err = new ProjectError("No Quiz Found");
      err.statusCode = 404;
      throw err;
    }
    res.send(req.params.quizId);

    if (!quiz.is_published) {
        const err = new ProjectError("Quiz is not published!");
        err.statusCode = 405;
        throw err;
    }

   } catch (error) {
     next(error);
   }

}
const submitExam = async (req: Request, res: Response)=>{
    res.send(req.body);
  }


  
export {startExam,submitExam}; 