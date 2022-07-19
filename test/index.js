'use strict'

var tap = require('tap')
var lib = require('..')

tap.test('first test', function (t) {
  t.ok(lib())
  t.end()
})
