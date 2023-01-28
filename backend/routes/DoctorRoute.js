import { Router } from "express";
import { addDoctor,getDoctorById,allDoctors,editDoctor,deleteAllDoctors,deleteDoctorById } from "../controllers/Doctor.js";

const DoctorRouter = Router();

DoctorRouter.get('/',allDoctors);
DoctorRouter.get('/:id',getDoctorById);
DoctorRouter.post('/',addDoctor);
DoctorRouter.patch('/:id',editDoctor);
DoctorRouter.delete('/',deleteAllDoctors);
DoctorRouter.delete('/:id',deleteDoctorById);

export default DoctorRouter