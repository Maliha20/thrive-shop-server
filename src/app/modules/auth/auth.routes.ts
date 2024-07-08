import express from 'express'
import { authValidations } from './auth.validation'
import { authControllers } from './auth.controller'
import validateRequests from '../../middleware/vaildateRequest'


const router = express.Router()


router.post('/login', validateRequests(authValidations.loginValidationSchema) ,authControllers.loginUser) 

export const authRoutes = router