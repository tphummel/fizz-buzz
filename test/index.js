'use strict'

const tap = require('tap')
const lib = require('..')

tap.test('1 -> 1', (t) => {
  t.equal(lib(1), '1')
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

tap.test('1-100 Sequence', (t) => {
  const expected = '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz'
  const actual = Array(100).fill().map((element, index) => lib(index + 1)).join(',')
  t.equal(actual, expected)
  t.end()
})
