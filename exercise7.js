"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
// 1. Record the exact moment an enrollment is approved
const approvedAt = polyfill_1.Temporal.Now.instant();
console.log(`Approved at (UTC): ${approvedAt}`);
// 2. Display in local timezone
const addisTime = approvedAt.toZonedDateTimeISO("Africa/Addis_Ababa");
const londonTime = approvedAt.toZonedDateTimeISO("Europe/London");
console.log(`Addis: ${addisTime.toPlainTime()}`);
console.log(`London: ${londonTime.toPlainTime()}`);
// 3. Course start date
const courseStart = polyfill_1.Temporal.PlainDate.from("2026-09-01");
const today = polyfill_1.Temporal.Now.plainDateISO();
const daysUntilStart = today.until(courseStart).total({ unit: "days" });
console.log(`${Math.floor(daysUntilStart)} days until course starts`);
// 4. Assignment deadline
const deadline = polyfill_1.Temporal.PlainDate.from("2026-12-15");
const remaining = today.until(deadline);
console.log(`${remaining.total({ unit: "days" })} days until assignment is due`);
