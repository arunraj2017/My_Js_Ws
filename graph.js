class DirectedGraph {

    constructor() {
        this.visited = new Set();
        this.adjList = {};
        this.stack = [];
    }

    addVertex(data) {
        this.adjList[data] = [];
    }
    addEdge(dt1, dt2) {
        this.adjList[dt1].push(dt2);
    }

    printList() {
        for (let dt in this.adjList) {
            console.log(`${dt} ---> ${this.adjList[dt]}`);
        }
    }

    topoSort() {

        for (let i in this.adjList) {
            if (!this.visited.has(i)) {
                this.callTopSort(i);
            }
        }
        this.visited.clear();
        return this.stack;
    }

    callTopSort(vertice) {

        if (!this.visited.has(vertice)) {
            this.visited.add(vertice);
            this.adjList[vertice].map(i => this.callTopSort(i));
            this.stack.push(vertice);
        }


    }

    // need a grayset (currently explored), whiteset(yet to explore), 
    //blackset(already explored) , parentMap (trace the calling nodes)
    detectCycle() {
        const greyset = new Set();
        const blackSet = new Set();
        for (let i in this.adjList) {
            if(this.cycleFinder(i, greyset, blackSet)) {
               return true;
           }
        }
        return false;
    }

    cycleFinder(node, greyset, blackSet) {
        greyset.add(node);
        this.adjList[node].map(nd => {

            if(blackSet.has(nd)) {
                continue;
            }

            if(greyset.has(nd)) {
                return true;
            }

            if(this.cycleFinder(nd, greyset, blackSet)) {
                return true;
            }
            
        });
        greyset.remove(node);
        blackSet.add(node);
        return false;
    }
}


const dg = new DirectedGraph();

dg.addVertex('1');
dg.addVertex('2');
dg.addVertex('3');
dg.addVertex('4');
dg.addVertex('5');
dg.addVertex('6');
dg.addVertex('8');
dg.addVertex('11');

dg.addEdge('1', '3');
dg.addEdge('1', '2');
dg.addEdge('3', '4');
dg.addEdge('5', '6');
dg.addEdge('6', '3');
dg.addEdge('3', '8');
dg.addEdge('3', '11');

dg.printList();
console.log(dg.topoSort());
console.log(dg.detectCycle())
