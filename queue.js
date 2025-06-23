function Queue(){
    collection = [];
    this.print = function(){
        console.log(collection);
    };
    
    this.enqueue = function(item){
        collection.push(item);
        };
   
    this.dequeue = function(){
      if(collection.length > 0){
        return collection.shift();
        }else{
              return null;
             }
    };
   
    this.size = function(){
        return collection.length;
    };
    
    this.front = function(){
       if(collection.length > 0){
          return collection[0];
          }else{
            return null;
        };
    };
    
    this.isEmpty = function(){
       return (collection.length === 0);
    };
}

var q = new Queue();
q.enqueue("John");
q.enqueue("Paul");
q.enqueue("Jane");
console.log(q.size()); // 3
console.log(q.front()); // John
q.print(); // [ 'John', 'Paul', 'Jane' ]
q.dequeue(); 
console.log(q.front()); // Paul
q.print(); // [ 'Paul', 'Jane' ]
