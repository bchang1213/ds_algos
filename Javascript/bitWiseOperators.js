// 1 = 00000001
// 2 = 00000010

console.log(1 | 2); // Bitwise OR
/**When comparing a bit in each place, if 1 | 0, the result is 1, thus why the result is an amaglamation of 1 values */
// R = 00000011 // equals 3

// 1 = 00000001
// 2 = 00000010
console.log(1 & 2); //Bitwise AND
// R = 00000000 // equals 0

//For each bit in bitwise and, they compare each bit with each other in each place. if it's comparing 0 AND 1, then it becomes 0.
