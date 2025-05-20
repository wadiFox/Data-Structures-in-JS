class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  add(value) {
    if (!this.has(value)) {
      this.dictionary[value] = value;
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  remove(value) {
    if (this.has(value)) {
      delete this.dictionary[value];
      this.length--;
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.length;
  }
}
const mySet = new Set();
console.log(mySet);               // {}
console.log(mySet.has(23));       // false
console.log(mySet.add(456));      // true
console.log(mySet);               // { 456: true }
console.log(mySet.has(456));      // true
console.log(mySet.add(456));      // false (déjà présent)
console.log(mySet);               // { 456: true }
console.log(mySet.add(23));       // false
console.log(mySet.add(4));      // true
console.log(mySet);               // 
console.log(mySet.has(4));      // true
console.log(mySet.add(67));      // false (déjà présent)
console.log(mySet);
console.log(mySet.size());
