import express from "express";
import { body } from "express-validator";

import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

// Create 
// POST /quiz/
router.post("/", isAuthenticated,[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("Please enter a valid name for quiz, minimum 10 characters long"),
    body('questions_list')
    .custom(questions_list => {
        if(questions_list.length == 0){
            return Promise.reject("Enter atleast one question");
        }
        return true;
    }),
    body('answers')
    .custom(answers => {
        if(Object.keys(answers).length == 0){
            return Promise.reject("answer should not be empty");
        }
        return true;
    })
], createQuiz);

// Get 
// GET /quiz/:quizId
router.get("/:quizId", isAuthenticated, getQuiz);

// Update
// PUT /quiz
router.put("/", isAuthenticated,[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("Please enter a valid name for quiz, minimum 10 characters long"),
    body('questions_list')
    .custom(questions_list => {
        if(questions_list.length == 0){
            return Promise.reject("Enter atleast one question");
        }
        return true;
    }),
    body('answers')
    .custom(answers => {
        if(Object.keys(answers).length == 0){
            return Promise.reject("answer should not be empty");
        }
        return true;
    })
], updateQuiz); // Changed to PUT

// Delete
// DELETE /quiz/:quizId
router.delete("/:quizId", isAuthenticated, deleteQuiz);

// Publish
// PATCH /quiz/publish
router.patch("/publish", isAuthenticated, publishQuiz);

export default router;
