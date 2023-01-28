import express from 'express'
import {getRationshopById,deleteAllRationshops,deleteRationshopById,editRationshop,addRationshop, allRationshops } from '../Controllers/Rationshop.js';
const RationshopRouter = express.Router();


RationshopRouter.get('/',allRationshops);
RationshopRouter.get('/:id',getRationshopById);
RationshopRouter.post('/',addRationshop);
RationshopRouter.patch('/:id',editRationshop)
RationshopRouter.delete('/',deleteAllRationshops);
RationshopRouter.delete('/:id',deleteRationshopById);

export default RationshopRouter