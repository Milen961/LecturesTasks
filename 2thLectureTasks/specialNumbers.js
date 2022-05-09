// function specialNumbers(num){
//     for (let index = 1; num < index; index++) {
      
//         if( num = num /10){
//             console.log(True)

//         }else{
//          console.log(False)


//         }

      
        
//     }

// }
// specialNumbers(15)

function solve(num) {
    let sum = 0;
    let result = '';
    for (let i = 1; i <= num; i++) {
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        result =
            sum === 5 ||
            sum === 7 ||
            sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}
solve(15)