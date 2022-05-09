function amazingNumbers(num){
let result = 0;
let numAsString = String(num);

for (let i = 0; i < numAsString.length; i ++){
    result += Number (numAsString[i]);

}
    let resulAsString = String(result);
    let special = false;
        for (let i = 0; i < resulAsString.length; i++){
            if (resulAsString[i] == '9'){
              special = true;
            }
        }
    console.log(`${num} Amazing? ${special ? 'True' : 'False '}`);
}
amazingNumbers(1233)