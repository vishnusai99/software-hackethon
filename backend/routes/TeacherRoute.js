import express from 'express'
import { addTeacher,allTeachers,getTeacherById,deleteAllTeachers,deleteTeacherById,editTeacher } from '../controllers/Teacher.js';
const TeacherRouter = express.Router()


TeacherRouter.get('/',allTeachers);
TeacherRouter.get('/:id',getTeacherById);
TeacherRouter.post('/',addTeacher);
TeacherRouter.patch('/:id',editTeacher)
TeacherRouter.delete('/',deleteAllTeachers);
TeacherRouter.delete('/:id',deleteTeacherById);

export default TeacherRouter