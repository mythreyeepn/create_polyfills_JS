Object.myCreate = function (obj, properties) {
  function F() {}
  F.prototype = proto;

  const result = new F();
  if (properties !== undefined) {
    for (let key in properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key)) {
        result[key] = properties[key];
      }
    }
  }

  return result;
};
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const tr = Object.create(person);
const Ar = Object.myCreate(person);
console.log(tr);
console.log(Ar);
