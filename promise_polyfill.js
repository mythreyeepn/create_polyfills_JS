function Promiseployfill(executor) {
  let isResolved = false;
  let isRejected = false;
  let resolvedValue;
  let thenCallback;
  let catchCallback;
  let finallyCallback;

  function resolve(value) {
    if (!isResolved && !isRejected) {
      isResolved = true;
      resolvedValue = value;
      if (thenCallback) {
        thenCallback(resolvedValue);
      }
      if (finallyCallback) {
        finallyCallback(resolvedValue);
      }
    }
  }
  function reject(value) {
    if (!isResolved && !isRejected) {
      isRejected = true;
      resolvedValue = value;
      if (thenCallback) {
        thenCallback(resolvedValue);
      }
      if (finallyCallback) {
        finallyCallback(resolvedValue);
      }
    }
  }
  function thenFn(thenCb) {
    if (isResolved) {
      thenCallback(resolvedValue);
    } else {
      thenCallback = thenCb;
    }
    // thenCallback = thenCb;
    return this;
  }
  function catchFn(catchCb) {
    if (isRejected) {
      if (catchCallback) catchCallback(resolvedValue);
    } else {
      catchCallback = catchCb;
    }
    return this;
  }

  function finallyFn(finallyCb) {
    finallyCallback = finallyCb;
    return this;
  }

  executor(resolve, reject);
  return {
    then: thenFn,
    catch: catchFn,
    finally: finallyFn,
  };
}

var examplePromise = new Promiseployfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 0);
  resolve(2);
});

examplePromise.then((result) => console.log(result));
