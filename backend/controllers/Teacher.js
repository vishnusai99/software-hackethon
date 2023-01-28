import teacherModel from "../models/TeacherModel.js";

export const allTeachers = async (req,res)=>{
    try {
        const Teachers = await teacherModel.findAll()
        res.json(Teachers)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteAllTeachers = async (req,res)=>{
    try {
        await teacherModel.destroy({
            truncate:true
        })
        res.json({
            "message" : "All data removed"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteTeacherById = async (req,res)=>{
    try {
        await teacherModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message" : "Single Teacher removed"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const addTeacher = async (req,res)=>{
    try{
        await teacherModel.create(req.body)
        res.json(
            {
                "message" : "Teacher created"
            }
        );
    }catch (error){
        res.json({message: error.message})
    }
}

export const getTeacherById = async (req, res) => {
    try {
        const Teacher = await teacherModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Teacher);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const editTeacher = async (req,res)=>{
    try {
        const data = await teacherModel.update(
            req.body,{
                where:{
                    id:req.params.id
                },
                returning:true,
                plain:true
            }
        )
        res.json(data[1])
    } catch (error) {
        res.json({message:error.message})
    }
}
