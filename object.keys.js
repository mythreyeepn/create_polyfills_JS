const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
//Object.keys(person) returns an array of keys

Object.myKeys = function (obj) {
  let result = [];
  for (var x in obj) {
    if (obj.hasOwnProperty(x)) result.push(x);
  }
  return result;
};

console.log(Object.keys(person));
console.log(Object.myKeys(person));
