/**
 *
 * Matrixes, nested arrays
 *
 */

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// prints 1,2,3,6,9,8,7,4,5

/*

i+ 1 means row down,
i — 1 row up,
j + 1 column up,
j -1 column down

*/
function spiralPrint(arr, i, j) {
  if (!arr[i] || !arr[i][j]) return;
  console.log(arr[i][j]);
  console.log("current i:", i, ", current j:", j);
  arr[i][j] = null;
  spiralPrint(arr, i, j + 1);
  spiralPrint(arr, i + 1, j);
  spiralPrint(arr, i, j - 1);
  spiralPrint(arr, i - 1, j);
}

// spiralPrint(a,0,0);

// prints 1,2,3,4,5,6,7,8,9
function printCount(arr, i, j) {
  if (!arr[i] || !arr[i][j]) return;
  console.log(arr[i][j]);
  console.log("current i:", i, ", current j:", j);
  arr[i][j] = null;
  printCount(arr, i, j + 1);
  printCount(arr, i + 1, 0);
}

// printCount(a, 0, 0)
