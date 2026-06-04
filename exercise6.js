"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
const api_response_model_1 = require("./models/api-response.model");
const studentRes = {
    status: "success",
    data: {
        id: "STU-001",
        name: "Dawit Bekele",
        enrollmentDate: polyfill_1.Temporal.Now.instant(),
        gpa: 3.4,
    },
    fetchedAt: polyfill_1.Temporal.Now.instant(),
};
console.log((0, api_response_model_1.renderResponse)(studentRes, (s) => `${s.name} - GPA: ${s.gpa ?? "N/A"}`));
const courseListRes = {
    status: "success",
    data: [
        {
            id: "CRS-101",
            title: "Web Development Fundamentals",
            capacity: 30,
            startDate: polyfill_1.Temporal.PlainDate.from("2026-09-01"),
        },
    ],
    fetchedAt: polyfill_1.Temporal.Now.instant(),
};
console.log((0, api_response_model_1.renderResponse)(courseListRes, (courses) => courses.map((c) => c.title).join(", ")));
