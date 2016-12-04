import {Response} from 'express-serve-static-core';


export class Controller {
  // todo saveUpdates
  // todo types, any
  protected respondWithResult = (res: Response, statusCode: number = 200) => {
    return (entity: any) => entity && res.status(statusCode).json(entity);
  };
  // protected removeEntity = (res: Response) => {
  //   return (entity) => {
  //     if (!entity) {
  //       return null;
  //     }
  //
  //     return entity.remove()
  //       .then(() => res.status(204).end());
  //   };
  // };
  protected handleEntityNotFound = (res: Response) => {
    return (entity: any) => {
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
