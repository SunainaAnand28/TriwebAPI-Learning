import { RequestHandler } from "express"
import mongoose from "mongoose";

import Quiz from "../models/quiz";
import Report from "../models/report";
import ProjectError from "../helper/error";
import { ReturnResponse } from "../utils/interfaces";

const startExam: RequestHandler = async (req, res, next) => {
  try {
    const quizId = req.params.quizId;
    console.log(`Received quizId: ${quizId}`); // Log quizId

    if (!mongoose.Types.ObjectId.isValid(quizId)) {
      const err = new ProjectError("Invalid Quiz ID format");
      err.statusCode = 400;
      throw err;
    }

    const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, is_published: 1 });
    console.log(`Quiz found: ${JSON.stringify(quiz)}`); // Log quiz object

    if (!quiz) {
      const err = new ProjectError("No Quiz Found");
      err.statusCode = 404;
      throw err;
    }

    if (!quiz.is_published) {
      const err = new ProjectError("Quiz is not published!");
      err.statusCode = 405;
      throw err;
    }

    const resp: ReturnResponse = { status: "success", message: "Quiz", data: quiz };
    res.status(200).send(resp);

  } catch (error) {
    next(error);
  }
};

const submitExam: RequestHandler = async (req, res, next) => {
  try {
    const quizId = req.body.quizId;
    const attempted_question = req.body.attempted_question;

    const quiz = await Quiz.findById(quizId, { answers: 1 });
    if (!quiz) {
      const err = new ProjectError("No Quiz Found");
      err.statusCode = 404;
      throw err;
    }
    // Converting Map to plain object
    const answersMap: Map<string, string> = quiz.answers;
    const answers: { [key: string]: string } = Object.fromEntries(answersMap);
    // check Result

    const userId: string = req.userId;
    let allQuestions: string[] = Object.keys(answers);
    let total: number = allQuestions.length;
    let score: number = 0;

    for (let i = 0; i < total; i++) {
      let question_number: string = allQuestions[i];
      if (!!attempted_question[question_number] && answers[question_number] === attempted_question[question_number]) {

        score = score + 1;

      }
    };


    const report = new Report({ userId, quizId, score, total })
    const data = await report.save()

    const resp: ReturnResponse = { status: "success", message: "Quiz submitted", data: { total, score, reportId: data._id } }
    res.status(200).send(resp);



  } catch (error) {
    next(error);
  }


}



export { startExam, submitExam }; 