const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      newStr = newStr + str[i] 
    }
    else {
      newStr = newStr + str[i] + '-'
    } 
  }
  let arr = []
  newStr.split('-').map(e => {
      arr.push(e.length+e[0])
    })

  return arr.filter(e => typeof e === 'string').join('').split('').filter(e => e !== '1').join('')
}

module.exports = {
  encodeLine
};
