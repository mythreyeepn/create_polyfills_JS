//Debounce Polyfill
const myDebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".increment_btn");
  const btn_press = document.querySelector(".increement_pressed");
  const count = document.querySelector(".increement_count");
  var pressedCount = 0;
  var triggerdCount = 0;
  btn.addEventListener("click", () => {
    btn_press.innerHTML = ++pressedCount;
    debounceCount();
  });
});

const debounceCount = myDebounce(() => {
  count.innerHTML = ++triggerdCount;
}, 800);

// Throttle Polyfill
const myThrottle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};
const start = new Date().getTime();
const ThrottleCount = myThrottle(() => {
  const now = new Date().getTime();
  console.log((now = start));
  count.innerHTML = ++triggerdCount;
}, 800);
