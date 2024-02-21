//polyfill for call
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("its not a function");
  }
  context.fn = this;
  return context.fn(...args);
};

let obj = {
  name: "text",
};

getName = function (age) {
  return this.name + age;
};

console.log(getName.myCall(obj, 30));

//Polyfill for apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("its not a function");
  }
  if (!Array.isArray(args)) {
    throw new Error("No an array");
  }

  context.fn = this;
  return context.fn(...args);
};

console.log(getName.myCall(obj, [30]));

// polyfill for bind
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("its not a function");
  }
  context.fn = this;
  return function () {
    return context.fn(...args);
  };
};
var out = getName.myBindl(obj, [30]);
console.log(out());
