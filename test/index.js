'use strict'

const tap = require('tap')
const lib = require('..')

tap.test('first test', function (t) {
  t.ok(lib())
  t.end()
})
