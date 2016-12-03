import {Request, Response} from 'express-serve-static-core';

import {usersModel} from './users.model';


export class UsersController {
  public show = (req: Request, res: Response) => {
    res.json(usersModel).end();
  }
  public insert = (req: Request, res: Response) => {
    usersModel.push(req.body);
    res.status(201).end();
  }
}