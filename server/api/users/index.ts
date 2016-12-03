import {Router} from 'express';

import {UsersController} from './users.controller';


const router = Router();
const usersController = new UsersController();

router.get('/', usersController.show);
router.put('/', usersController.insert);

module.exports = router;
