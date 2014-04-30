'use strict';

var Throttler = require('../lib/phant-throttler-memcache.js');

exports.Throttler = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {
    test.expect(2);
    test.doesNotThrow(Throttler(), 'shouldn\'t throw an error');
    test.done();
  }
};
