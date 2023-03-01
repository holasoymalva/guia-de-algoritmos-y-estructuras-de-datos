class Nodo {
    constructor(elemento){
        this.elemento = elemento;
        this.siguiente = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.head= null;
        this.tamaño = 0;
    }
    
    agregar(elemento) {
        var nodo = new Nodo(elemento);
    
        var actual;
    
        if (this.head == null) {
            this.head = nodo;        
        }else{
            actual = this.head;
            while(actual.siguiente){
                actual = actual.siguiente;
            }
            actual.siguiente = nodo;
        }
        this.tamaño++;
    }
    insertar(elemento, posicion){
        if (posicion < 0 || posicion > this.tamaño) {
            return console.log('La posicion no es valida');
        }else{
            let nodo = new Nodo(elemento);
            let actual, anterior;
            actual = this.head;
            if (posicion === 0) {
                nodo.siguiente = this.head;
                this.head = nodo;
            }else{
                actual = this.head;
                let contador = 0;

                while (contador < posicion) {
                    contador++;
                    anterior = actual;
                    actual = actual.siguiente;
                }

                nodo.siguiente = actual;
                anterior.siguiente = nodo;
            }
            this.tamaño++;
        }
    }
    removerElemento(elemento){
        let actual = this.head;
        let anterior = null;
        while (actual != null) {
            if (actual.elemento === elemento) {
                if(anterior == null){
                    this.head = actual.siguiente;
                }else{
                    anterior.siguiente = actual.siguiente;
                }
                this.tamaño--;
                return actual.elemento;
            }
            anterior = actual;
            actual = actual.siguiente;
        }
        return -1;
    }
    printList(){
        let actual = this.head;
        let cadena = "";
        while (actual) {
            cadena += actual.elemento+" ";
            actual = actual.siguiente;
        }
        console.log(cadena);
    }
}

const lista = new ListaEnlazada();

lista.agregar(5);
lista.agregar(2);
lista.agregar(10);
lista.agregar(1);

lista.removerElemento(2);

lista.insertar(5,2);

lista.printList();



