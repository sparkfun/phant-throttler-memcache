/*
 * phant-throttler-memcache
 * https://github.com/sparkfun/phant-throttler-memcache
 *
 * Copyright (c) 2014 SparkFun Electronics
 * Licensed under the GPL v3 license.
 */

'use strict';

/**** Module dependencies ****/
var util = require('util'),
    Memcached = require('memcached');

/**** Throttler prototype ****/
var app = Throttler.prototype;

/**** Expose Throttler ****/
exports = module.exports = Throttler;

/**** Initialize a new Throttler ****/
function Throttler(config) {

  if (! (this instanceof Throttler)) {
    return new Throttler(config);
  }

  config = config || {};

  util._extend(this, config);

  app.memcache = new Memcached(this.host);

}

app.host = 'localhost:11212'; // https://github.com/3rd-Eden/node-memcached#server-locations
app.memcache = false;
app.limit = 100;
app.window = 900; // 15 mins in seconds

app.available = function(key, cb) {

  var self = this;

};

app.block = function(key, cb) {

  var now = (new Date()).getTime() / 1000;

};

app.clear = function(key) {

};

