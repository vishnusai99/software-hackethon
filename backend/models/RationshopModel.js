import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const RationshopModel = sequelize.define('rationshop',
    {
        name:{
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
export default RationshopModel