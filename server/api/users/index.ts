import {Router} from 'express';

import {UsersController} from './users.controller';
import {USERS_API} from './users.routes';


const router = Router();
const usersController = new UsersController();

router.get(USERS_API, usersController.index);
router.post(USERS_API, usersController.insert);
router.put(USERS_API, usersController.update);
router.delete(USERS_API, usersController.remove);

module.exports = router;
