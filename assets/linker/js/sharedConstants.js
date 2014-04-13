'use strict';

var scope = typeof exports !== 'undefined' ? exports : window;

scope.consts = {};

scope.consts.ACCESS_ROLES = {
  'public' : 'public',
  'user' : 'user',
  'admin' : 'admin'
};

scope.consts.ACCESS_LEVELS = {
  'anon' : ['public'],
  'user' : ['user', 'admin'],
  'admin': ['admin']
};