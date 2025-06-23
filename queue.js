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

// Queue with priority
function priorityQueue(){
    collection = [];
    
    this.print = function(){
        console.log(collection);
        }
    
    this.enqueue = function(item){
        if(this.isEmpty()){
            collection.push(item);
        }else{
            var added = false;
            for(var i = 0; i < collection.length; i++){
                if(item[1] < collection[i][1]){// checking priorities
                collection.splice(i, 0, item);
                added = true;
                break;
                }
            }
        if(!added){
        collection.push(item);
        }
     }
 }
    
    this.dequeue = function(){
       var value = collection.shift();
       return value[0];
    } 
    
    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function(){
        return collection.length === 0;
    }
    
    }    

     var q = new priorityQueue(); 
   
   q.enqueue(["John Doe", 3]);
   q.enqueue(["John Smith", 2]);
   q.enqueue(["Jane Doe", 1]);
   q.enqueue(["Greg Davis", 4]);
   q.enqueue(["Georges Lukas", 5]);
   q.print();
   console.log(q.size());
   console.log(q.front());
   q.dequeue();
   q.print();
   console.log(q.size());
   console.log(q.front());
   q.dequeue();
   q.print();
   console.log(q.size());
   console.log(q.front());