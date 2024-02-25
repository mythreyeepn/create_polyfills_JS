Object.myAssign = function (targetObj, ...source) {
  let result = {};
  result = { ...targetObj, ...source };
  return result;
};
