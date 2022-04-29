const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|'}) {
  str = String(str)
  addition = String(addition)

  let arrAddition = new Array(additionRepeatTimes)
  let strAddition = arrAddition.fill(addition).join(additionSeparator)

  let arrStr = new Array(repeatTimes)

  return arrStr.fill(str + strAddition).join(separator)
}

module.exports = {
  repeater
};
