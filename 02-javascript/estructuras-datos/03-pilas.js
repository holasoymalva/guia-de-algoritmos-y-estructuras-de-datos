class Pila{
    constructor(){
        // this.items = [];
        this.elementos = [];
    }
    push(elemento){
        this.elementos.push(elemento);
    }
    pop(){
        if (this.elementos.length == 0) 
            return console.log('No tenemos elementos que eliminar');
        return this.elementos.pop();
    }
    imprimirPila(){
        let cadena = "";
        for (let index = 0; index < this.elementos.length; index++) {
            cadena += this.elementos[index] + " ";
        }
        return console.log(cadena) ;
    }
}

const pila = new Pila();

pila.push(4);
pila.push(2);
pila.push(5);
pila.imprimirPila();
pila.pop();
pila.imprimirPila();