let arr = [];

let N = prompt();

for (let i = 0; i < N; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

console.log(...arr);
