/**
 * Created by viksidada on 6/27/2017.
 */

var phrase = "aby baby is not sleezy";

var array = Array.from(phrase);

var myMap = new Map();
for (var x in array) {
    var value = "";

    value = myMap.get(array[x]);

    if (value === undefined) {
        value = 1;
    } else value++;

    myMap.set(array[x], value);
}

// console.log(myMap);
// console.log(myMap.size);

var mapItr = myMap.keys();


var array = [];

for (var z = 0; z < myMap.size; z++) {

    array.push(mapItr.next().value);
}

array.sort();

console.log(array);

for (var x = 0; x < array.length; x++) {
    console.log(array[x], myMap.get(array[x]));
}