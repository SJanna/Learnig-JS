/*We'll pass you an array of two numbers. Return the sum of those two 
numbers plus the sum of all the numbers between them. The lowest number
will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the 
numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
    let numMayor=arr[1];
    let numMenor=arr[0];
    let suma=0;
    if(numMayor<numMenor){
    numMayor=arr[0];
    numMenor=arr[1];
    }
     for (let i=numMenor; i<=numMayor; i++ ){
       suma+=i;
     }
      return suma;
    }
    sumAll([1, 4]);