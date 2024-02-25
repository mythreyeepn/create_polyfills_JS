Array.prototype.myIncludes = function (element, index) {
  if (index === undefined) index = 0;
  for (let i = index; i < this.length; i++) {
    if (this[i] === element) {
      return true;
    }
  }
  return false;
};
