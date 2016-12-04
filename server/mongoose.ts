import * as mongoose from 'mongoose';
const glob = require('glob');

const config = require('../config/environment');


export function registerMongoose(): void {
  mongoose.connect(config.mongo.uri, config.mongo.options);
  mongoose.connection.on('connected', () => console.log('mongoose connected'));
  mongoose.connection.on('error', (err: Error) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });

  if (!config.seedDB) {
    return;
  }

  const files = glob('./api/**/*.seed.ts', {sync: true});
  files.forEach((file: string) => {
    require(file);
  });
}
