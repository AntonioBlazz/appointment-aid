import express from 'express'
import { addDoctor,loginAdmin, allDoctors } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',upload.single('image'), addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors', allDoctors)

export default adminRouter