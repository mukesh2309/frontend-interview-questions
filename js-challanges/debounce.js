let btn = document.getElementById("btn");
let debounceTag = document.getElementById("debounce");
let counter = document.getElementById("counter");

let count = 0;
let debounceCount = 0;

let start = new Date().getTime();

const debounce = (cb, delay = 100) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debounceFun = debounce((params) => {
  let now = new Date().getTime();
  console.log(now - start);
  debounceTag.innerHTML = ++debounceCount;
}, 800);

btn.addEventListener("click", () => {
  counter.innerHTML = ++count;
  debounceFun("hi");
});
