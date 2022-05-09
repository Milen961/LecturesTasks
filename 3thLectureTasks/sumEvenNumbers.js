function sumEvenNumbers(arr){
    let sum = 0;
    
 for (let index = 0; index < arr.length; index++) {
  arr[index] = Number(arr[index]);

 }
  for(let num of arr){
      if(num % 2 == 0){
            sum +=num;
           
      }
  }
  console.log(sum);
}
sumEvenNumbers(['3','5','7','9'])
