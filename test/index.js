'use strict'

const tap = require('tap')
const lib = require('..')

tap.test('first test', function (t) {
  t.ok(lib())
  t.end()
})

tap.test('1 -> 1', (t) => {
  t.equal(lib(1), 1)
  t.end()
})

tap.test('3 -> Fizz', (t) => {
  t.equal(lib(3), 'Fizz')
  t.end()
})
