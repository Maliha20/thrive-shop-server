import express from 'express';
import { userControllers } from './user.controller';

import { userValidationSchema } from './user.validation';
import validateRequests from '../../middleware/vaildateRequest';



const router = express.Router()

router.post('/signup',validateRequests(userValidationSchema), userControllers.createUser)

export const userRoutes = router;