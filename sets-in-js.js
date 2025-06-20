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
console.log(mySet.add(456));      // false (already exist)
console.log(mySet);               // { 456: true }
console.log(mySet.add(23));       // false
console.log(mySet.add(4));      // true
console.log(mySet);               // 
console.log(mySet.has(4));      // true
console.log(mySet.add(67));      // false (already exist)
console.log(mySet);
console.log(mySet.size());


// Create a set using an array


function mySet(){
    var collection = [];
    // verify if an element exists and return true or false if it does'nt
    this.has = function(element){
        if(collection.indexOf(element) !==-1){
           return true;
        }
        return false; 
    }
    // print the values of the array
    this.values = function(){
        return collection;
        }
    
    // add an element to the array
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return `The Element => ${element} Was Successfully Added`;
        }
        return `The Element => ${element} Already Exist in The Array`;
    }
    
    // remove an element from the array
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return `The Element => ${element} Was Successfully Removed`;
        }
        return `The Element => ${element} Doesn't Exist in The Array`;
    }
    
}

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
console.log(mySet1.remove(6));
console.log(mySet1.remove(67));
console.log(mySet1.remove(64));
console.log(mySet1.values());

// return the union of two sets

this.union = function(otherSet){
   var unionSet = new mySet();
   var firstSet = this.values();
   var secondSet = otherSet.values();
   firstSet.forEach(function(value){
    unionSet.add(value);
   })
   secondSet.forEach(function(value){
    unionSet.add(value);
   })
   return unionSet;
};

// return the intersection of two sets

this.intersection = function(otherSet){
   var intersectionSet = new mySet();
   var firstSet = this.values();
   firstSet.forEach(function(value){
    if(otherSet.has(value)){
    intersectionSet.add(value);
    }
   })
   return intersectionSet;
};

// return the difference between two sets

this.difference = function(otherSet){
  var differenceSet = new mySet();
  var firstSet = this.values();
  firstSet.forEach(function(value){
    if(!otherSet.has(value)){
      differenceSet.add(value);
    }
    })
    return differenceSet;
    };