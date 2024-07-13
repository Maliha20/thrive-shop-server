import express from 'express';
import validateRequests from '../../middleware/vaildateRequest';
import {
  productValidationSchema,
  updateProductValidationSchema,
} from './product.validation';
import { productControllers } from './product.controller';

const router = express.Router();

router.post(
  '/create-product',
  validateRequests(productValidationSchema),
  productControllers.createProduct,
);
router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getAProduct);
router.put(
  '/:id',
  validateRequests(updateProductValidationSchema),
  productControllers.updateAProduct,
);
router.delete('/:id', productControllers.deleteAProduct);

export const productRoutes = router;
