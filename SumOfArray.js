/**
 * Created by viksidada on 6/27/2017.
 */

var array = [2,4,6,8,1,3,5,7,9];


function arrayOps (array) {
    console.log('array', array);

    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log('sum', sum);

    array.sort();
    console.log('Sortedarray', array);

    var letter = Array.from("vikas");
    console.log('from', letter);
}

arrayOps(array);
