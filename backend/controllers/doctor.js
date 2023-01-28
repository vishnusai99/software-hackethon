import doctorModel from "../models/DoctorModel.js";


export const allDoctors = async (req,res)=>{
    try {
        const Doctors = await doctorModel.findAll()
        res.json(Doctors)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteAllDoctors = async (req,res)=>{
    try {
        await doctorModel.destroy({
            truncate:true
        })
        res.json({
            "message" : "All data removed"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteDoctorById = async (req,res)=>{
    try {
        await doctorModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message" : "Single doctor removed"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const addDoctor = async (req,res)=>{
    try{
        await doctorModel.create(req.body)
        res.json(
            {
                "message" : "Doctor created"
            }
        );
    }catch (error){
        res.json({message: error.message})
    }
}

export const getDoctorById = async (req, res) => {
    try {
        const Doctor = await doctorModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Doctor);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const editDoctor = async (req,res)=>{
    try {
        const data = await doctorModel.update(
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

doctorModel.create(
    {
        doctor_name:"vamshi",
        specialization:"cardiology",
        contact:"9012345678",
        start_timing:'10:00',
        end_timing:'17:00'
    }
)