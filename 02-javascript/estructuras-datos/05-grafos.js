

class Graph{
    constructor(){
        this.edges = {};
        this.nodes = []
    }
    addNode(node){
        this.nodes.push(node);
        this.edges[node] = [];
        return this.nodes;
    }
    addEdge(node1, node2, size = 1){
        this.edges[node1].push({node: node2, size: size});
        this.edges[node2].push({node: node1, size: size});
    }
    addDirectionEdge(node1, node2, size = 1){
        this.edges[node1].push({ node: node2, size: size});
    }
    display(){
        let graph = "";
        this.nodes.forEach(node => {
            graph += node + "->" + this.edges[node].map(
                edge => edge.node
            ).join(", ")+ " "
        });
        console.log(graph);
    }
}

// v = { a,b,c,d,e}
// E = { ab, ac, be, ce, cd}

const grafo = new Graph;
grafo.addNode('a');
grafo.addNode('b');
grafo.addNode('c');
grafo.addNode('d');
grafo.addNode('e');
grafo.addEdge('a','b',5);
grafo.addEdge('a','c',1);
grafo.addEdge('b','e',3);
grafo.addEdge('c','e',4);
grafo.addEdge('c','d',6);
grafo.display();