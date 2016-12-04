import * as mongoose from 'mongoose';

const config = require('../config/environment');


export function registerMongoose(): void {
  mongoose.connect(config.mongo.uri, config.mongo.options);
  mongoose.connection.on('connected', () => console.log('mongoose connected'));
  mongoose.connection.on('error', (err: Error) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });
};
