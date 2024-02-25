function myFlat(arr, depth) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result = result.concat(myFlat(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
