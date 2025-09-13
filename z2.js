let arr = [];
const N = 5;

for (let i = 0; i < N; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

console.log(...arr);
