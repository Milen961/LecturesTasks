function jsonConverter (jsontStr){
 let person = JSON.parse(jsontStr)
 let entries = Object.entries(person)
 for (let [key, value] of entries) {
     console.log(`${key}: ${value}`);
 }
}
jsonConverter(`{"name": "George", "age": 40, "town": "Sofia"}`)
