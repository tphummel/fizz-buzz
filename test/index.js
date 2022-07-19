'use strict'

const tap = require('tap')
const lib = require('..')

tap.test('1 -> 1', (t) => {
  t.equal(lib(1), 1)
  t.end()
})

tap.test('3 -> Fizz', (t) => {
  t.equal(lib(3), 'Fizz')
  t.end()
})

tap.test('5 -> Buzz', (t) => {
  t.equal(lib(5), 'Buzz')
  t.end()
})

tap.test('15 -> FizzBuzz', (t) => {
  t.equal(lib(15), 'FizzBuzz')
  t.end()
})

tap.test('1-20 Sequence', (t) => {
  const expected = '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz'
  const actual = Array(20).fill().map((element, index) => lib(index + 1)).join(',')
  t.equal(actual, expected)
  t.end()
})
