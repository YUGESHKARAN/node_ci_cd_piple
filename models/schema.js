const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    credits: {
        type: Number,
        default: 3,
    },
});


const Subject = mongoose.model("Subject", subjectSchema);

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 20,
        required: true,
    },
    department: {
        type: String,
        default: "CSE",
        enum: ["CSE", "AI&DS", "IT"],
    },
    // normalized: reference Subject documents instead of embedding strings
    subjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
        },
    ],
});

const Student = mongoose.model("Student", studentSchema);

// Keep backwards compatibility: require('./models/schema') returns Student,
// but Subject is available as a property: Student.Subject
module.exports = Student;
module.exports.Subject = Subject;