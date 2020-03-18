import { Router } from 'express';
import userController from '../controllers/UserController';

import loginrequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginrequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginrequired, userController.update);
router.delete('/', loginrequired, userController.delete);

export default router;
