import {Router} from 'express';

import {UsersController} from './users.controller';
import {USERS_API} from './users.routes';


const router = Router();
const usersController = new UsersController();

router.get('/', usersController.index);
router.post('/', usersController.insert);
router.put('/', usersController.update);
router.delete('/', usersController.remove);

module.exports = {
  apiName: USERS_API,
  router
};
