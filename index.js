'use strict'

function fizzBuzz (input) {
  const divBy3 = input % 3 === 0
  const divBy5 = input % 5 === 0

  if (divBy3 && divBy5) return 'FizzBuzz'
  if (divBy3) return 'Fizz'
  if (divBy5) return 'Buzz'
  return `${input}`
}

module.exports = fizzBuzz
