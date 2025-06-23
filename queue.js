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
          }else{return null;}
    };
    
    this.isEmpty = function(){
       return (collection.length === 0);
    };
}