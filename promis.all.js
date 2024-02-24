Promise.allPolyfill = (promises) => {
  return new Promise((reslove, reject) => {
    const result = [];
    let pending = promises.length;
    if (!promises.length) {
      reslove(result);
      return;
    }
    promises.forEach((element, index) => {
      Promise.resolve(element).then((res) => {
        result[index] = res;
        pending--;

        if (pending === 0) {
          reslove(result);
        }
      }, reject);
    });
  });
};
