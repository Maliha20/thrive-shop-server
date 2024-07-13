import express from 'express';
import validateRequests from '../../middleware/vaildateRequest';
import { checkoutValidationSchema } from './checkout.validation';
import { checkoutController } from './checkout.controller';
const router = express.Router();

router.post(
  '/',
  validateRequests(checkoutValidationSchema),
 checkoutController.createCheckout
);


export const checkoutRoute = router;