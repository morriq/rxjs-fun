import {Response} from 'express-serve-static-core';
import * as mongoose from 'mongoose';


export class Controller<T> {
  protected respondWithResult = (res: Response, statusCode: number = 200) => {
    return (entity: mongoose.Document|mongoose.Document[]) => entity && res.status(statusCode).json(entity);
  };
  protected removeEntity = (res: Response) => {
    return (entity: mongoose.Document) => entity.remove();
  };
  protected updateEntity = (data: T) => {
    return (entity: mongoose.Document) => Object.assign(entity, data).save();
  };
  protected handleEntityNotFound = (res: Response) => {
    return (entity: mongoose.Document) => {
      if (entity) {
        return entity;
      }

      res.status(404).end();
    };
  };
  protected handleError = (res: Response, statusCode: number = 500) => {
    return (err: any) => res.status(statusCode).end();
  }
}
