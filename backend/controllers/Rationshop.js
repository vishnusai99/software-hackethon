import rationshopModel from "../models/RationshopModel.js";


export const allRationshops = async (req,res)=>{
    try {
        const Rationshops = await rationshopModel.findAll()
        res.json(Rationshops)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteAllRationshops = async (req,res)=>{
    try {
        await rationshopModel.destroy({
            truncate:true
        })
        res.json({
            "message" : "All data removed"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteRationshopById = async (req,res)=>{
    try {
        await rationshopModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message" : "Single Rationshop removed"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const addRationshop = async (req,res)=>{
    try{
        await rationshopModel.create(req.body)
        res.json(
            {
                "message" : "Rationshop created"
            }
        );
    }catch (error){
        res.json({message: error.message})
    }
}

export const getRationshopById = async (req, res) => {
    try {
        const Rationshop = await rationshopModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Rationshop);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const editRationshop = async (req,res)=>{
    try {
        const data = await rationshopModel.update(
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
