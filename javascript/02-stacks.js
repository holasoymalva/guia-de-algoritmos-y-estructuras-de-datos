/*  Stacks */

// Functions: push, pop, peek, length

var Stack = function() {
  this.count = 0;
  this.storage = {};
  
  this.push = funciton(value){
    this.storage[this.count] = value;
    this.count++;
  }
  
  this.pop = funciton() {
    if(this.count === 0){
      return undefined; 
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  
  this.size = function() {
    return this.count;
  }
  
  this.peek = function(){
    return this.storage[this.count-1];
  }
}

var newStack = new Stack();

newStack.push(1);
newStack.push(2);
