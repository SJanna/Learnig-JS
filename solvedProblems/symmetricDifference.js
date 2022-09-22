function diffArray(arr1, arr2) {
    let newArr = [];
    newArr=arr1.concat(arr2)
    for (let i=0;i<newArr.length;i++){
      for (let j=i+1;j<newArr.length;j++){
        if(newArr[i]==newArr[j]){
          newArr.splice(j,1);
          newArr.splice(i,1);
          i--;
          console.log(newArr);
        }
    }
    }
    return newArr;
  }
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);