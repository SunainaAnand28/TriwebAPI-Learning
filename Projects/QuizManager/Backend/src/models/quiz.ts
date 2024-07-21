import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema for a single question
const questionSchema = new Schema({
    question_number: { type: Number, required: true },
    question: { type: String, required: true },
    options: {
        1: { type: String, required: true },
        2: { type: String, required: true },
        3: { type: String, required: true },
        4: { type: String, required: true }
    }
});

// Define the schema for the quiz
const quizSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        questions_list: [questionSchema], // Array of question schemas
        answers: {
            type: Map,
            of: String,
            required: true
        },
        created_by: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        is_published: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

// Create and export the Quiz model
const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
