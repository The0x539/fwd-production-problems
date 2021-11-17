/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value (5) for x. You must still use
  `x` as the variable inside the function, however.
*/

'use strict';

(function() {
  var x = 5;

  function double(num) {
    if (typeof(num) !== 'number') {
      if (!isNaN(+num)) {
        /* if a conversion is possible, do it silently */
        num = +num;
      } else {
        /* otherwise, complain */
        console.log('double takes a number, but you passed a ' + typeof(num) + ': ' + String(num))
        return null;
      }
      /* that counds as "some reasonable way", right? */
    }

    var x = num * 2;
    return x;
  }

  double(6);
  console.log('The value of x is', x, '-- it should be 5.');

  console.log('The DOUBLED value of x, however, is ' + double(x) + '.');
  console.log('This should be fourteen:', double('7'));
  console.log('And this should have already printed an error and returned null:', double('seven'))

  /*
    Step 2. Rewrite the JavaScript `double()` function above so that
    it does not pollute the global namespace: that is, neither its
    variables nor the `double()` function itself can be accessed
    directly via the global `window` object, like `window.x`).

    Be sure to comment out the original `double()` function so you
    can accurately test your work.
  */
})();

if (window.double != undefined) {
  console.log('oh no, double is visible in the global scope!');
}
/* see? it's not. */

/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
*/
