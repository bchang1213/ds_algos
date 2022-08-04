/**
 * Falsy (false)
 * undefined
 * null
 * 0
 * false
 * ''
 * NaN
 *
 */

/**
 *
 * anything not falsy is truthy.
 * Truthy
 *
 *
 */

false || true; // true
false || "Mosh"; //Mosh
false || 1; // 1

false || 1 || 2; //  1
// short circuiting. the first truthy value is returned.

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // red

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor); // blue
