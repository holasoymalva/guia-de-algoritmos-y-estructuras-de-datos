class Queue {
    constructor(){
        this.queue = [];
    }
    encolar(elemento){
        this.queue.push(elemento);
        return this.queue; 
    }

    dequeue(){
        return this.queue.shift();
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    imprimir(){
        return this.queue;
    }

}

const cola = new Queue;
console.log(cola.encolar(12));
console.log(cola.encolar(45));
console.log(cola.encolar(81));
console.log(cola.encolar(5));
console.log(cola.encolar(76));
console.log(cola.dequeue())
console.log(cola.imprimir());
console.log(cola.dequeue())
console.log(cola.imprimir());
console.log(cola.dequeue())
console.log(cola.imprimir());