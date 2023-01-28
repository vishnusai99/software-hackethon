import ComplaintModel from "../models/ComplaintModel.js";

export const addComplaint = async (req,res)=>{
    try {
        await ComplaintModel.create(req.body)
        res.json(
            {
                "message" : "Todo created"
            }
        );
    }catch (error){
        res.json({message: error.message})
    }
}

export const getAllComplaints = async (req,res)=>{
    try {
        const Complaints = await ComplaintModel.findAll();
        res.json(Complaints);
    } catch (error) {
        res.json({message: error.message})
    }
}
