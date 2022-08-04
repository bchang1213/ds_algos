/**
 * Javascript is a Dynamically Typed languaged
 *
 *  There are primitives (value types)
 *
 *
 * There are Reference Types
 *  Reference type can be
 * 		Object,
 * 		Array,
 * 		Function,
 * 		Date,
 * Collections
 * 		Other types of objects
 *
 * Primitive Types:
 * 		- Numbers
 * 		- String
 * 		- Boolean
 * 		- Null
 * 		- Undefined
 * 		- Symbols
 *
 *
 * */

/**Primitive type assignment */
let numOne = 50;
let numTwo = numOne; // 50
numOne = 100;
console.log(numTwo); //still 50
console.log(numOne); // now 100.

// When it comes to Reference Data types and assigning values to variables,
// unless you explicitly create a new Object to assign a variable to, the reference may be shared.
// When you make a change to one object and there is another variable that references that object,
// the change will be shared.

//This is due to pointers.

/* Reference Type Assignment*/

let object1 = {
  name: "brian",
  age: 31,
};

let object2 = object1; //object two references the same object with the same pointer in memory

//updating object 1
object1.age = 18;

console.log(object1); //has age 18
console.log(object2); // also has age 18

/* Unless: we make a pure function that doesnt change the value of anything outside of it's closure*/

//Pure function
function changeAge(obj) {
  const newObj = {};

  for (key in obj) {
    if (key === "age") {
      newObj[key] = 10;
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const changedObj = changeAge(obj1);
console.log(object1);
console.log(changedObj);
console.log(object2);
