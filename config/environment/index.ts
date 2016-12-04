const all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: global.__base,

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

export const configuration = Object.assign(all, require('./' + process.env.NODE_ENV));
