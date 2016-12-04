module.exports = {
  // Server port
  port: process.env.PORT || 3000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',
  seedDB: true,
  mongo: {
    uri: 'mongodb://localhost/fb3-dev'
  }
};
