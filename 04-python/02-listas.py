class Nodo:
    def __init__(self, valor=None):
        self.valor = valor;
        self.siguiente = None;

class ListaEnlazada:
    def __init__(self):
        self.cabeza = None;

    def insertar(self,middle_node, nuevoValor):
        if middle_node is None:
            print("El nodo que queremos agregar no esta disponible");
            return
        NewNodo = Nodo(nuevoValor)
        NewNodo.siguiente = middle_node.siguiente
        middle_node.siguiente = NewNodo
    def RemoverNodo(self,elemento):
        marcador = self.cabeza
        if marcador is not None:
            if marcador.valor == elemento:
                self.cabeza = marcador.siguiente
                marcador = None
                return
        while ( marcador is not None):
            if marcador.valor == elemento:
                print(marcador.valor == elemento)
                break
            valorAnterior = marcador
            marcador = marcador.siguiente
        if marcador == None:
            return 
        valorAnterior = marcador
        marcador = None


    def listesElementos(self):
        imprimirValor = self.cabeza
        while imprimirValor is not None:
            print(imprimirValor.valor)
            imprimirValor = imprimirValor.siguiente

lista = ListaEnlazada()
lista.cabeza = Nodo("Lunes")
elemento2 = Nodo("Martes")
elemento3 = Nodo('Miercoles')

lista.cabeza.siguiente = elemento2
elemento2.siguiente = elemento3

lista.insertar(lista.cabeza.siguiente,"Jueves")

lista.listesElementos()

print('-----------------------')

lista.RemoverNodo("Martes")

print('-----------------------')

lista.listesElementos()


