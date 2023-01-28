import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const doctorModel = sequelize.define('doctor',
    {
        doctor_name:{
            type: DataTypes.STRING
        },
        specialization:{
            type: DataTypes.STRING
        },
        contact:{
            type: DataTypes.STRING
        },
        start_timing:{
            type: DataTypes.TIME
        },
        end_timing:{
            type: DataTypes.TIME
        }
    }
)
export default doctorModel