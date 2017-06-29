/**
 * Created by viksidada on 6/27/2017.
 */

var array1 = [2,4,6,8];
var array2 = [10,9,7,5,3,1];
var name = "vikas";

var stringArray = Array.from(name);
console.log('Array Methods: ');
console.log('array.from()', stringArray);

var result = Array.isArray(array1);
console.log('array.isArray()', result);

var addArray = array1.concat(array2);
console.log('concat', addArray);

var iterator = array1.entries();
console.log('array1/entries()');
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

var filterArray = addArray.filter(function(numbers) {
    return numbers > 5;
})
console.log('filtyer', filterArray);

var present = array2.includes(5);
console.log('contains', present);

var addString = array2.join('-');
console.log('array.join()', addString);

var doubleArray = array1.map(function(x) {
    return x*x;
})
console.log('array.map', doubleArray);

console.log('array.reverse()', array2.reverse());

var sliced = array2.slice(2,4);
console.log('slice()', sliced);

array1.splice(1,0,100);
console.log('splice() by adding', array1);

array1.splice(1,2);
console.log('splice() by removing', array1);



