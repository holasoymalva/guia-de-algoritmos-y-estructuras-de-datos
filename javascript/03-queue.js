var Queue = function(){
  collection = [];
  this.print = function(){
    console.log(collection);
  };
  this.enqueue = function(element){
    collection.push(element);
  };
  this.dequeue = function(element){
    return collection.shift();
  };
  this.front = function(element){
    return collection[0]
  };
  this.size = function(element){
    return collection.length;
  };
  this.isEmpty = function(){
    return (collection.length === 0)
  };
}

