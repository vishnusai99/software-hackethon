import { Router } from "express";
import { addComplaint,getAllComplaints } from "../controllers/Complaint.js";


const ComplaintRouter = Router();
ComplaintRouter.get('/',getAllComplaints);
ComplaintRouter.post('/',addComplaint);

export default ComplaintRouter