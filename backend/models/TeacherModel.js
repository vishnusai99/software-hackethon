import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const TeacherModel = sequelize.define('teacher',
    {
        teacher_name:{
            type: DataTypes.STRING
        },
        subject:{
            type: DataTypes.STRING
        },
        contact:{
            type: DataTypes.STRING
        }
    }
)
export default TeacherModel