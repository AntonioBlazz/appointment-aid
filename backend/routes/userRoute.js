import express from 'express'
import { registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.prototype('/register',registerUser)






export default userRouter