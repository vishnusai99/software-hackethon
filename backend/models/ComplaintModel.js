import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const complaintModel = sequelize.define("complaints",{
    complainer_name:{
        type: DataTypes.STRING
    },
    complaint_detail:{
        type: DataTypes.STRING
    },
    complainer_phone:{
        type: DataTypes.STRING
    },
    complaint_domain:{
        type:DataTypes.STRING
    },
    against_person_name:{
        type:DataTypes.STRING
    },
    proof_img_file:{
        type: DataTypes.BLOB('long'),
        allowNull:true
    }
})
export default complaintModel