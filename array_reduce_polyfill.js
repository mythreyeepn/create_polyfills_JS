// Creating a polyfill for Reduce
// Normal Reduce function
//array.reduce((accumlator,current,index,array)=>{},initialValue)

const nums = [2, 4, 6, 8, 10];

Array.prototype.MyReduce = function (cb, initialVal) {
  let accumlator = initialVal;
  for (let i = 0; i < this.length; i++) {
    accumlator = accumlator ? cb(accumlator, this[i], i, this) : this[i];
  }
  return accumlator;
};

const sum = nums.reduce((accumlator, current, index, array) => {
  return accumlator + current;
}, 0);

console.log(sum);

const reducePoly = nums.MyReduce((accumlator, current, index, array) => {
  return accumlator + current;
}, 0);

console.log(reducePoly);
