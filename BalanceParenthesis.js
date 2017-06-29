/**
 * Created by viksidada on 6/28/2017.
 */
 var paran = "{{{{{{{}}{{}}{{{";

 var open = 0;
 var closed = 0;

 for (var x in paran) {

     if ( paran.charAt(x) === "{") {
         open++;
     } else closed--;

 }

 var result = open + closed;
 console.log('result', result);

 if (result === 0) {
     console.log('Balanced');
 } else if (result > 0) {
     while (result != 0) {
         paran += "}"
         result--;
     }
 } else {
     while (result != 0) {
         paran += "}";
         result++;
     }
 }

 console.log(paran);