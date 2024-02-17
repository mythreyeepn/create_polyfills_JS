// Creating a polyfill for map
// Normal Map function
//arary.map((item,index,array)=>{})

const nums = [1, 2, 3, 4];
Array.prototype.myMap = function (cb) {
  let tempArray = []; // because map returns an array
  for (let i = 0; i < this.length; i++) {
    // this here refers to the array on which it is being called
    tempArray.push(cb(this[i], i, this));
  }
  return temp;
};

//Normal Map
const mutliplyBy3 = nums.map((num) => {
  num * 3;
});

console.log(mutliplyBy3);

//Polyfill for Map
const mutliply3 = nums.myMap((num) => {
  num * 3;
});

console.log(mutliply3);
