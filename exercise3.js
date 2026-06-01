"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_model_1 = require("./models/student.model");
function processStudent(raw) {
    if ((0, student_model_1.isStudent)(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
processStudent({
    id: "STU-001",
    name: "Hana",
    gpa: 3.7,
});
processStudent(42);
console.log((0, student_model_1.parseStudent)({
    id: "STU-001",
    name: "Hana",
}));
// Uncomment to test the exception
console.log((0, student_model_1.parseStudent)({
    id: 42,
    name: "Test",
}));
