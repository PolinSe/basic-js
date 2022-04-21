const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit(n) {
    let arr = Array.from(n.toString())
    let resultArray = []
    for (let i = 0; i < arr.length; i++) {
      resultArray.push(+arr.filter((e, index) => index !== i).join(''))
    }
    return Math.max(...resultArray)
  }
}
