function solve(word1, word2, word3){
 let avgRange = 0
 let sumOfLength = Number(word1.length) + Number(word2.length) + Number(word3.length)
 avgRange =  Math.floor((Number(word1.length) + Number(word2.length) + Number(word3.length)) / 3)
 console.log(sumOfLength)
 console.log(avgRange)
}
solve('chocolate', 'ice cream', 'cake'
)