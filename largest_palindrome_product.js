/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  let start;
  let end;
  let product;

  function isPalindrome(num) {
    if (
      num.toString() ===
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (digits === 2) {
    start = 10;
    end = 99;
  } else if (digits === 3) {
    start = 100;
    end = 999;
  }

  for (let i = start; i <= end; i++) {
    for (let j = i; j <= end; j++) {
      product = i * j;
      if (isPalindrome(product)) {
        if (palindromeNumber < product) {
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = product;
          console.log(factor_0, factor_1, palindromeNumber);
        }
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
