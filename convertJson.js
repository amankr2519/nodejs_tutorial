const jsonString = '{"name" : "Aman" , "age":20 }'
const jsonObj = JSON.parse(jsonString)
console.log(typeof jsonObj);

const Object = {name:"Aman" ,age :20}
const string = JSON.stringify(Object)
console.log(string);
console.log(typeof string);
