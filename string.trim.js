String.prototype.myTrim = function () {
  const whitespaces = [" ", "\t", "\n", "\r", "\v", "\f"];
  let start = 0;
  let end = this.length - 1;
  for (let i = 0; i < this.length; i++) {
    if (whitespaces.indexOf(this[i]) !== -1) {
      start++;
    } else {
      break;
    }
  }
  for (let j = this.length - 1; j >= 0; j--) {
    if (whitespaces.indexOf(this[j]) !== -1) {
      end--;
    } else {
      break;
    }
  }
  return this.slice(start, end + 1);
};

let text = "       Hello World!        ";
let result = text.myTrim();
console.log(result);
