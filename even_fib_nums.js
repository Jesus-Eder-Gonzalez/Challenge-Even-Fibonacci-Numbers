/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 2;
  let fibArray = [1, 2];

  if (maxFibValue > 2) {
    while (fibArray[fibArray.length - 1] <= maxFibValue) {
      let length = fibArray.length;
      let current = fibArray[length - 2] + fibArray[length - 1];
      fibArray.push(current);

      if ((current % 2 === 0) && (current <= maxFibValue)) {
        sum += current;
      }
    }

  } else {
    return maxFibValue;
  }

  return sum;
}


// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;
  let fibArray = [1, 2];

  if (maxFibValue > 2) {
    do {

      let length = fibArray.length;
      fibArray.push(fibArray[length - 2] + fibArray[length - 1]);

    } while (fibArray[fibArray.length - 1] < maxFibValue);

    highest = fibArray.filter(x => x <= maxFibValue).pop();

  } else {
    return maxFibValue;
  }

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};