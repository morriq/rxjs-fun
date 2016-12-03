import * as path from 'path';

import {Application, Request, Response} from 'express-serve-static-core';

export function registerRoutes(app: Application) {
  app.use('/users', require('./api/users/index.ts'));

  app.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.join(global.appRoot, 'src', 'index.html'));
  });
}