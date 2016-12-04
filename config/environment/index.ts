import {shared} from './shared';


const all = {
  // Root path of server
  root: global.__base,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

module.exports = Object.assign(all, shared, require('./' + shared.env));
