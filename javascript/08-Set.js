/* Sets */

function customSet(){
  var collection = [];
  this.has = function(element){
    return (collection.indexOf(element) !== -1);
  };
  this.values = function(){
    return collection;
  };
  this.add = function(element){
    if(!this.has(element)){
      colleciton.push(element);
      return true;
    }
    return false;
  };
  this.remove = function(element){
    if(!this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index,1);
      return true;
    }
    return false;
  };
  this.zise = function{
    return collection.length;
  };
  this.union = function(otherSet){
    var unionSet = new customSet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e){
      unionSet.add(e);
    });
    secondSet.forEach(function(e){
      unionSet.add(e);
    });
    return unionSet;
  };
  
  this.intersection = function(otherSet){
    var intersection = newSet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersection.add(e);
      }
    });
    return intersection;
  };
  
   this.difference = function(otherSet){
    var differenceSet = newSet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(!otherSet.has(e)){
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
}
