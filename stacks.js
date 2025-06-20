var Stack = function (){
    this.storage = {};
    this.count =0;
    // add a value to the end of the stack
    this.push = function(value){
        this.storage[this.count]=value;
        this.count++;
    }
    // remove a value from the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
     
    }
    
    this.size = function(){
        
        return this.count;
    }
    // returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
    
}

var myStack = new Stack();

myStack.push(9);
myStack.push(11);
myStack.push(11);
console.log(myStack.peek());
console.log(myStack.pop())
console.log(myStack.peek());
console.log(myStack.size());
myStack.push("I am the last standing after all!!!");
myStack.push("Some pushing, poping and peeking");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());




