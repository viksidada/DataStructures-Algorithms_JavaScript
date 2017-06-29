/**
 * Created by viksidada on 6/27/2017.
 */

var word = "palapll";

var reverse = Array.from(word).reverse().join("");

if (word === reverse) {
    console.log('Palendrome');
} else console.log('Not Palendrome');