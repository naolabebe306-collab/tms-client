"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
const enrollment_model_1 = require("./models/enrollment.model");
const course_model_1 = require("./models/course.model");
const pending = {
    status: "PENDING",
    requestedAt: polyfill_1.Temporal.Now.instant(),
    studentId: "STU-001",
    courseId: "CRS-101",
};
console.log((0, enrollment_model_1.describeEnrollment)(pending));
const webDev = {
    status: "ACTIVE",
    enrolledCount: 28,
    startDate: polyfill_1.Temporal.PlainDate.from("2026-09-01"),
};
console.log((0, course_model_1.describeCourse)(webDev));
