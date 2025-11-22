const Student = require("../models/schema")
const bcrypt = require("bcrypt")
const getStudentsData = async(req,res)=>{
    try{

        const students = await Student.find({})
        if (!students) {return res.status(404).json({message:"students not found"})}

        res.status(200).json({data:students})
        
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const addStudent = async(req, res)=>{
    try{
     const {name, email,password, age, department, subjects} = req.body;

     if(!name || !email || !password || !age || !department || !subjects ){
        return res.status(400).json({message:"all fields are required"})
     }

     const hasPassword = await bcrypt.hash(password,10)

    const newStudent =  new Student({
        name,
        email,
        age,
        department,
        subjects,
        password:hasPassword

     })

    await newStudent.save()
    res.status(201).json({message:"Student created successfully"})
    }

    catch(err){
       res.status(500).json({message:err})
       console.log(err.message)
    }
}


const updateStudent =async(req,res)=>{
    try{
        const {email} = req.params;
        const {name, age, department, subjects} = req.body;

        const student = await Student.findOne({email});
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        if(name){
            student.name = name
        }
        if(age){
            student.age = age
        }
        if(department){
            student.department = department
        }
        if(subjects){
            student.subjects = subjects
        }

      await  student.save();
      res.status(200).json({message:"student data updated", data:student})

    }
    catch(err)
    {
        res.staus(500).json({message:err.message})
    }
}

const deleteStudennt = async(req,res)=>{
    try{
      const {email} = req.params;
      const student = await Student.findOne({email})
      if(!student){
        return res.status(404).json({message:"student not found"})
      }
      await Student.deleteOne({email})
      res.status(301).json({message:"student deleted successfully", student})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports= {getStudentsData,addStudent,updateStudent,deleteStudennt }