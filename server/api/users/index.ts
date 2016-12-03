import {Router} from 'express';

import {UsersController} from './users.controller';
import {usersApi} from './routes';


const router = Router();
const usersController = new UsersController();

router.get('/', usersController.show);
router.post('/', usersController.insert);
router.put('/', usersController.update);

module.exports = {
  apiName: usersApi,
  router
};
