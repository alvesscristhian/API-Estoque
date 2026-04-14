import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index);
// router.get('/', userController.show);
router.post('/', userController.store);
// router.get('/', userController.update);
// router.get('/', userController.delete);

export default router;
