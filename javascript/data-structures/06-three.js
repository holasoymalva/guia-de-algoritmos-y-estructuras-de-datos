let three = function(){
    this.getter = function(){
        console.log("this is the value")
        return true;
    }
}

let Three = new three();
Three.getter();
