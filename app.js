console.log('Entered app.js...');
process.env.CONFIG_SCHEME = process.env.CONFIG_SCHEME || 'staging';
console.log('CONFIG_SCHEME: ' + process.env.CONFIG_SCHEME);

// first thing, we setup nconf to use the following:
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'config/.env' + CONFIG_SCHEME

var nconf = require('nconf');
require('nconf').argv()
  .env()
  .file({ file: 'config/.env' + process.env.CONFIG_SCHEME });


// Start sails and pass it command line arguments
require('sails').lift(require('optimist').argv);
