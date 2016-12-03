import * as path from 'path';
const glob = require('glob');

import {Application, Request, Response} from 'express-serve-static-core';


export function registerRoutes(app: Application): void {
  const files = glob('./api/**/index.ts', {sync: true});
  files.forEach((file: string) => {
    app.use(file.match(/api(.*)\//), require(file));
  });

  app.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.join(global.__base, 'src', 'index.html'));
  });
}