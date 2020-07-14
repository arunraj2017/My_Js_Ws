/**
 * cycle in a undirected graph
 * 
 * 
 * ///Soln
 * if next node is visited and not parent then there is a cycle.
 * 
 * 
 */


class Graph {
    constructor() {
        this.adjList = {};
        this.visited = new Set();
    }
    add(v1, v2) {
        if (this.adjList[v1] == null) {
            this.adjList[v1] = [];
        }
        if (this.adjList[v2] == null) {
            this.adjList[v2] = [];
        }
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    printGraph() {
        for (let v in this.adjList) {
            console.log(`${v} --> ${this.adjList[v]}`);
        }
    }

    detectCycleInGraph() {
        for (let i in this.adjList) {
            if (this.findCycle(i, -1)) {
                return true;
            }
        }
        return false;
    }

    findCycle(v, parent) {
        this.visited.add(v);
        const avs = this.adjList[v];
        for(let i =0; i< avs.length; i++) {
            if(this.visited.has(avs[i])) {
                if(parent !== -1 && avs[i] !== parent) {
                 return true;
                } else {
                    continue;
                }
             }
             if(this.findCycle(avs[i], v)){
                 return true;
             }
        }
       
        return false;

    }
}


const gg = new Graph();
gg.add('1', '2');
gg.add('2', '3');
gg.add('3', '4');
gg.add('3', '6');
gg.add('4', '5');
gg.add('5', '6');


gg.printGraph();
console.log(gg.detectCycleInGraph());