import {Request, Response} from 'express-serve-static-core';

import {usersModel, IUser} from './users.model';
import {Controller} from '../controller';
import {USERS_API_USERID} from './users.routes';


export class UsersController extends Controller<IUser> {
  public index = (req: Request, res: Response) => {
    return usersModel.find()
      .then(this.respondWithResult(res))
      .catch(this.handleError(res));
  };
  public insert = (req: Request, res: Response) => {
    return usersModel.create(req.body)
      .then(this.respondWithResult(res, 201))
      .catch(this.handleError(res));
  };
  public update = (req: Request, res: Response) => {
    return usersModel.findById(req.body._id)
      .then(this.handleEntityNotFound(res))
      .then(this.updateEntity(req.body))
      .then(this.respondWithResult(res, 204))
      .catch(this.handleError(res));
  };
  public remove = (req: Request, res: Response) => {
    return usersModel.findById(req.params[USERS_API_USERID.substr(1)])
      .then(this.handleEntityNotFound(res))
      .then(this.removeEntity(res))
      .then(this.respondWithResult(res, 204))
      .catch(this.handleError(res));
  };
}
