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
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.dictionary[value];
      this.length--;
      return true;
    }
    return false;
  }

  size() {
    return this.length;
  }
}

// ✅ CORRECT USAGE
const setTest = new Set();
console.log(setTest.has(23));       // false
console.log(setTest.add(456));      // true
console.log(setTest.has(456));      // true
console.log(setTest.add(456));      // false (already exists)
console.log(setTest.add(23));       // true ✅ Was false before: that was an error in test, not in code
console.log(setTest.add(4));        // true
console.log(setTest.has(4));        // true
console.log(setTest.add(67));       // true ✅ was written "false" by mistake
console.log(setTest.values());      // Show all added values
console.log(setTest.size());        // 4



// Create a set using an array


class mySet {
  constructor() {
    var collection = [];

    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };

    this.values = function () {
      return collection;
    };

    this.add = function (element) {
      if (!this.has(element)) {
        collection.push(element);
        return `The Element => ${element} Was Successfully Added`;
      }
      return `The Element => ${element} Already Exists in The Array`;
    };

    this.remove = function (element) {
      if (this.has(element)) {
        const index = collection.indexOf(element);
        collection.splice(index, 1);
        return `The Element => ${element} Was Successfully Removed`;
      }
      return `The Element => ${element} Doesn't Exist in The Array`;
    };

    this.union = function (otherSet) {
      const unionSet = new mySet();
      const firstSet = this.values();
      const secondSet = otherSet.values();

      firstSet.forEach(value => unionSet.add(value));
      secondSet.forEach(value => unionSet.add(value));

      return unionSet;
    };

    this.intersection = function (otherSet) {
      const intersectionSet = new mySet();
      this.values().forEach(value => {
        if (otherSet.has(value)) {
          intersectionSet.add(value);
        }
      });
      return intersectionSet;
    };

    this.difference = function (otherSet) {
      const differenceSet = new mySet();
      this.values().forEach(value => {
        if (!otherSet.has(value)) {
          differenceSet.add(value);
        }
      });
      return differenceSet;
    };

    this.subset = function (otherSet) {
      return this.values().every(value => otherSet.has(value));
    };
  }
}

// ✅ TESTING THE CLASS
const mySet1 = new mySet();
console.log(mySet1.add(456));      
console.log(mySet1.values());               
console.log(mySet1.has(456));      
console.log(mySet1.add(456));   
console.log(mySet1.values());  
console.log(mySet1.add(46));      
console.log(mySet1.values());              
console.log(mySet1.has(46));      
console.log(mySet1.add(64));
console.log(mySet1.add(67));
console.log(mySet1.values());
console.log(mySet1.remove(6));        // Doesn't exist
console.log(mySet1.remove(67));      // Should remove
console.log(mySet1.remove(64));      // Should remove
console.log(mySet1.values());        // Should show [456, 46]

// ✅ SUBSET TEST
const set1 = new mySet();
const set2 = new mySet();
set1.add("a");
set2.add("b");
set2.add("c");
set2.add("a");
set2.add("d");

console.log(set1.subset(set2)); // true
console.log(set2.subset(set1)); // false
