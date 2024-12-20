let btn = document.getElementById("btn");
let throttleTag = document.getElementById("debounce");
let counter = document.getElementById("counter");

let count = 0;
let debounceCount = 0;

let start = new Date().getTime();

const throttle = (cb, delay = 100) => {
  let isThrottle = true;
  let timer;
  return (...args) => {
    if (isThrottle) {
      isThrottle = false;
      timer = setTimeout(() => {
        cb(...args);
        isThrottle = true;
      }, delay);
    }
  };
};

const throttleFun = throttle((params) => {
  let now = new Date().getTime();
  console.log(now - start);
  throttleTag.innerHTML = ++debounceCount;
}, 800);

btn.addEventListener("click", () => {
  counter.innerHTML = ++count;
  throttleFun("hi");
});
