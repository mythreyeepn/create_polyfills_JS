function isArray(value) {
  if (
    typeof value === "object" &&
    value !== null &&
    typeof value.length === "number" &&
    typeof value.push === "function"
  ) {
    return true;
  } else return false;
}

if (!Array.isArray) {
  Array.isArray = function (value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  };
}
