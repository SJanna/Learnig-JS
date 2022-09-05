//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

/* 
Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver
un arreglo de enteros que comienza con el número representado por el parámetro startNum y termina 
con el número representado por el parámetro endNum. El número inicial será siempre menor o igual 
que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles
de ningún tipo. También debe funcionar en el caso que startNum y endNum sean iguales.
*/
let arr= []
function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){
        arr=[]
        arr.push(endNum)
        return arr;
    }else{
      rangeOfNumbers(startNum, endNum-1)
      arr.push(endNum)
      return arr;
    }
  };
  rangeOfNumbers(1,5)
  console.log(rangeOfNumbers(1,5));