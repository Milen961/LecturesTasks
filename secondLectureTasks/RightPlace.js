function rightPlace(word,char,match){
 // create cariable for result
 let result = '';


 // combine word char
 for (let i =  0; i < word.length; i++){

 
 if (word[i] == '_'){
     result += char;

 }else {
     result += word[i];
 }
}
 if(result == match){
     console.log('Matched');

 }else {
     console.log('Not Matched');
 }
 
 // read characters one by one 
 // if current character is '_' add char perameter to result
 // else add current character to result 


 // comapre result with match and print msg
    
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')