import express from "express";
import sequelize from "./config/database.js";
import cors from "cors";
import ComplaintRouter from "./routes/ComplainRoute.js";
import DoctorRouter from "./routes/DoctorRoute.js";
import RationshopRouter from "./routes/rationshopRoute.js";
import TeacherRouter from "./routes/TeacherRoute.js";
const app = express()
const port = 8080
try {
    await sequelize.authenticate();
    sequelize.sync({force:true});
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
app.use(cors());
app.use(express.json())
app.use('/complaints',ComplaintRouter);
app.use('/doctors',DoctorRouter);
app.use('/teachers',TeacherRouter)
app.use('/rationshop',RationshopRouter);
app.listen(port, () => console.log(`app listening on port ${port}!`))