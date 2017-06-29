/**
 * Created by viksidada on 6/28/2017.
 */
//Amazon Technical Screening - Cows & Bulls

var  first = "7810";
var second = "8888";

var cows = 0;
var bulls = 0;
var mySet = new Set();

for (var i = 0; i < second.length; i++) {

     for (var j = 0; j < first.length; j++) {

        if (mySet.has(j)) {
            continue;
        }

        if (second.charAt(i) === first.charAt(j)) {
            if (i === j) {
                bulls++;
            } else {
                cows++;
            }
            mySet.add(j);
            break;
        }

    }
}

console.log('cows: ', cows, 'bulls: ', bulls);