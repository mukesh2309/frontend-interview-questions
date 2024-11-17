let btn = document.getElementById("btn");
let debounce = document.getElementById("debounce");
let counter = document.getElementById("counter");

let count = 0;
let debounceCount = 0;

const debounceFun = throttle((params) => {
  let now = new Date().getTime();
  console.log(now - start);
  debounce.innerHTML = ++debounceCount;
}, 800);

btn.addEventListener("click", () => {
  counter.innerHTML = ++count;
  debounceFun("hi");
});
