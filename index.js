'use strict'

function fizzBuzz (input) {
  const divBy3 = input % 3 === 0
  const divBy5 = input % 5 === 0

  if (divBy3 || divBy5) {
    let output = ''
    if (divBy3) output += 'Fizz'
    if (divBy5) output += 'Buzz'
    return output
  } else {
    return input
  }
}

module.exports = fizzBuzz
