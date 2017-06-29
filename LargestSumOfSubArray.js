/**
 * Created by viksidada on 6/27/2017.
 */

var array = [1,2,4,6, -2, -5];

var currentMax = 0;
var currentSum = 0;

for (var x in array) {
    currentSum += array[x];

    if (currentSum > currentMax) {
        currentMax = currentSum;
    }

    console.log('currentSum', currentSum);
}

console.log('Largest Sum of Sub Array', currentMax);
