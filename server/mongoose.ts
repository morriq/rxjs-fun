import * as mongoose from 'mongoose';
import {configuration} from '../config/environment/index';
const glob = require('glob');


export function registerMongoose(): void {
  mongoose.connect(configuration.mongo.uri, configuration.mongo.options);
  mongoose.connection.on('connected', () => console.log('mongoose connected'));
  mongoose.connection.on('error', (err: Error) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });

  if (!configuration.seedDB) {
    return;
  }

  const files = glob('./api/**/*.seed.ts', {sync: true});
  files.forEach((file: string) => {
    require(file);
  });
}
