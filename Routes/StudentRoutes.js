const express = require("express");
const Student = require("../models/schema")
const router = express.Router();
const middleware = require("../middleware")
const {getStudentsData,addStudent,updateStudent, deleteStudennt} = require("../Controller/StudentController")


router.get("/",middleware, getStudentsData)
router.post("/",middleware, addStudent)
router.put("/:email",middleware, updateStudent)
router.delete("/:email",middleware, deleteStudennt)

module.exports = router


