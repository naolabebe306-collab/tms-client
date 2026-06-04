"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assessment_model_1 = require("./models/assessment.model");
const quiz = {
    id: "QUIZ-001",
    kind: "quiz",
    title: "SQL Basics",
    correctAnswers: 8,
    totalQuestions: 10,
};
const lab = {
    id: "LAB-001",
    kind: "lab",
    title: "REST API Project",
    functionalityScore: 85,
    codeQualityScore: 90,
};
console.log(`Quiz grade: ${(0, assessment_model_1.calculateGrade)(quiz)}%`);
console.log(`Lab grade: ${(0, assessment_model_1.calculateGrade)(lab)}%`);
// Uncomment to test readonly error
// quiz.id = "QUIZ-999";
