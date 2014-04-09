/**
 * Action
 *
 * @module      :: Model
 * @description :: This model encapsulates an action
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  adapter: 'mongo',

  attributes: {
    name: {
      type: 'string',
      required: true
    }
  }
};
