console.log('Entered app.js with NODE_ENV: ' + process.env.NODE_ENV);

// Start sails and pass it command line arguments
require('sails').lift(require('optimist').argv);
