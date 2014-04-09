/**
 * Global adapter config
 * 
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

var nconf = require('nconf');

module.exports.adapters = {

  // If you leave the adapter config unspecified 
  // in a model definition, 'default' will be used.
  'default': 'mongo',

  // Persistent adapter for DEVELOPMENT ONLY
  // (data is preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  },

  mongo: {
    module: 'sails-mongo',
        
    host: nconf.get('MONGO_HOST'),
    port: nconf.get('MONGO_PORT'),
    user: nconf.get('MONGO_USER'),
    password: nconf.get('MONGO_PASSWORD'),
    database: nconf.get('MONGO_DATABASE')

  },

  mysql: {

    module: 'sails-mysql',
    host: nconf.get('MYSQL_HOST'),
    user: nconf.get('MYSQL_USER'),
    password: nconf.get('MYSQL_PASSWORD'), 
    database: nconf.get('MYSQL_DATABASE')
  }
};