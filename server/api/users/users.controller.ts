import {Request, Response} from 'express-serve-static-core';

import {usersModel} from './users.model';
import {Controller} from '../controller';


export class UsersController extends Controller {
  public show = (req: Request, res: Response) => {
    res.json(usersModel).end();
  };
  public insert = (req: Request, res: Response) => {
    req.body.id = new Date().getTime();
    usersModel.unshift(req.body);
    res.status(201).end();
  };
  public update = (req: Request, res: Response) => {
    usersModel.some((user, index) => {
      if (user.id !== req.body.id) {
        return false;
      }

      usersModel[index] = req.body;
      res.status(204).end();

      return true;
    });

    res.status(404).end();
  };
}
