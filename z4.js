const M = 2;
const N = 3;

let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

let summs = [];

for (let i = 0; i < M; i++) {
  let summa = 0;
  for (let j = 0; j < N; j++) {
    summa += arr[i][j];
  }
  summs.push(summa);
}

console.log(summs);