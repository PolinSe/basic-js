const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform(arr) {
    if (!Array.isArray(arr)) throw Error `'arr' parameter must be an instance of the Array!`
    let result = [];
      for (let i =0; i < arr.length; i++) {
        if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
          result.push(arr[i])
        }
        else {
          if (arr[i] === '--discard-prev' && arr[i-1]) {
            result.pop()
          }
          if (arr[i] === '--double-prev' && arr[i-1]) {
            result.push(arr[i-1])
          }
          if (arr[i] === '--double-next' && arr[i+1]) {
            result.push(arr[i+1])
          }
          if (arr[i] === '--discard-next' && arr[i+1]) {
            i+=2 
          }
        }
      }
    return result
  }
};
