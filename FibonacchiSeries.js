/**
 * Created by viksidada on 6/27/2017.
 */

var a = 0;
var b = 1;
console.log(a, b);

for (var x = 0; x < 98; x++) {
    var sum = a + b;

        if (sum > 100) {
        break;
    }

    console.log(sum);

    a = b;
    b = sum;
    sum = 0;



}