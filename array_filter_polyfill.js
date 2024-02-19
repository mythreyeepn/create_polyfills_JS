// Creating a polyfill for filter
// Normal filter function
//array.filter((item,index,array)=>{})

const nums = [1, 2, 3, 4, 5, 8];
Array.prototype.myFilter = function (cb) {
  let flag = false;
  let tempArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) tempArray.push(this[i]);
  }
  return tempArray;
};

const greterThan2 = nums.filter((num) => {
  return num > 2;
});
console.log(greterThan2);

const greterThan2poly = nums.myFilter((num) => {
  return num > 2;
});
console.log(greterThan2poly);
