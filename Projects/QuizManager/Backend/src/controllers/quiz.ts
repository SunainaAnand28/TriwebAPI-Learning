import { Request, Response, NextFunction } from "express";

import Quiz from "../models/quiz";
import ProjectError from "../helper/error";

interface ReturnResponse {
    status: "success" | "error";
    message: string,
    data: {}
}


const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created_by = req.userId;
        const name = req.body.name;
        const questions_list = req.body.questions_list;
        const answers = req.body.answers;
        const quiz = new Quiz({ name, questions_list, answers, created_by })
        const result = await quiz.save()
        const resp: ReturnResponse = { status: "success", message: "Quiz created successfully", data: { quizId: result._id } }
        res.status(201).send(req.body);
    } catch (error) {
        next(error);
    }

}

const getQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body.params.quizId;
        const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, answers: 1 });
        if (!quiz) {
            const err = new ProjectError("No quiz found");
            err.statusCode = 404;
            throw err;
        }
       if(req.userId !== quiz.created_by.toString()){
        const err = new ProjectError("You are not authorized");
            err.statusCode = 403;
            throw err;
       }

        const resp: ReturnResponse = { status: "success", message: "Quiz", data: quiz }
        res.status(200).send(req.body);

    } catch (error) {
        next(error);
    }
}

const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new ProjectError("No quiz found");
            err.statusCode = 404;
            throw err;
        }

        if(req.userId !== quiz.created_by.toString()){
            const err = new ProjectError("You are not authorized");
                err.statusCode = 403;
                throw err;
           }

        quiz.name = req.body.name;
        quiz.questions_list = req.body.questions_list;
        quiz.answers = req.body.answers;
        await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz Deleted", data: {} };
        res.status(200).send(req.body);
    } catch (error) {
        next(error);
    }
}

const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId);
        
        if (!quiz) {
            const err = new ProjectError("No quiz found");
            err.statusCode = 404;
            throw err;
        }
        
        if(req.userId !== quiz.created_by.toString()){
            const err = new ProjectError("You are not authorized");
                err.statusCode = 403;
                throw err;
           }
        await Quiz.deleteOne({ _id:quizId})
        const resp: ReturnResponse = { status: "success", message: "Quiz Deleted", data: {} };
        res.status(200).send(req.body);

    } catch (error) {
        next(error);
    }
}

const publishQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body.params.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new ProjectError("No quiz found");
            err.statusCode = 404;
            throw err;
        }
        quiz.is_published = true;
        await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz Published", data: {} };
        res.status(200).send(req.body);
       
    } catch (error) {
        next(error);
    }
}


export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz };