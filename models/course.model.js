"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
function describeCourse(status) {
    switch (status.status) {
        case "DRAFT":
            return `Draft created by ${status.createdBy}`;
        case "PUBLISHED":
            return `Published with syllabus ${status.syllabus}`;
        case "ACTIVE":
            return `Active with ${status.enrolledCount} students since ${status.startDate}`;
        case "ARCHIVED":
            return `Archived with ${status.finalEnrollmentCount} students`;
        case "CANCELLED":
            return `Cancelled because ${status.reason}`;
        default: {
            const _check = status;
            throw new Error(`Unhandled status: ${JSON.stringify(_check)}`);
        }
    }
}
