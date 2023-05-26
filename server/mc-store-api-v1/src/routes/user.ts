import { Router } from 'express';
import apiHandler from '../modules/user/api-handler.js';

const router = Router();

router.get('/', apiHandler.getAllUser);
router.get('/search', apiHandler.getAllUserPagination);
router.get('/:userId', apiHandler.getUserById);

router.post('/register', apiHandler.register);
router.post('/login', apiHandler.login);

router.put('/:userId', apiHandler.updateUser);

router.delete('/', apiHandler.deleteAllUser);
router.delete('/:userId', apiHandler.deletUserById);

export default router;
