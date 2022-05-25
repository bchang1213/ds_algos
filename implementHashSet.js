/*
Hash Set or Javascript Set().

*/

const Set = function () {
  this.data = [];
  this.length = 0;
  this.add = function (value) {
    if (!this.data.includes(value)) {
      //only add values that do not exist in the data yet
      this.data.push(value);
      this.length++;
    }
    return;
  };
};
