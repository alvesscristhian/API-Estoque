import { Router } from 'express';
import productController from '../controllers/ProductController';

const router = new Router();

router.get('/', productController.index);
// router.get('/:id', productController.show);
// router.post('/', productController.store);
// router.put('/:id', productController.update);
// router.delete('/:id', productController.delete);

export default router;
