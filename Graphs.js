/**
 * Graphs are used in social networks, gps, anywhere to model relationship between objects.
 *
 * graphs represent connected objects.
 *
 * Graphs can indicate how people are connected, how strong these relationships are.
 * Graphs consist of nodes and edges.
 * Technically, a tree is a type of graph. its a graph without cycles.
 * Graphs in the social networking sense dont have a root node.
 * Nodes can be called vertices(vertex) and connections are called edges.
 * if a node is directly connected, they are ADJACENT or NEIGHBORS
 *
 * If edges have a direction, they are called a DIRECTED GRAPH.
 * Undirected Graphs are like facebook and linkedin, if you add someone as a friend, there will be a line or onnection between the two
 * There are also weights, if the weight is higher, that means the connection is stronger.
 *
 * ADJACENCY MATRIX:
 *      represent edges in a graph. It's a two dimensional array.
 *      can be expensive as numbers of nodes increases.
 *      Adding node: O(n^2)
 *      Vertices and Edges matter when determining time complexity
 *      Remove : O ( V^2)
 *
 *  *      Space O(V^2)
 *      Add edge O(1)
 * *      remove edge O(1)
 * *      query edge O(1)
 *        find neighbors O(V)
 *        add node O(V^2)
 *        remove Node O(V^2)
 *
 * ADJACENCY LIST:
 *      Array of linked lists.
 *      Space: O(VERTICES + EDGES)
 */

const Graph = function () {
  this.Node = function (label) {
    this.label = label;
  };

  // string : node
  this.nodes = new Map();

  //adjacency list
  // node: List of Nodes
  this.adjacencyList = new Map();

  this.addNode = function (label) {
    let node = new Node(label);
    //add node
    this.nodes.putIfAbsent(label, node);
    // add entry into adjacency list as well
    this.adjacencyList.putIfAbsent(node, []);
  };

  this.removeNode = function (label) {
    let node = nodes.get(label);
    if (node === null) {
      return;
    }

    //removed the connection
    for (const [key, value] of this.adjacencyList) {
      this.adjacencyList.get(key).remove(node);
    }

    //remove the node reference entirely from adjacency list
    this.adjacencyList.remove(node);
    //remove from graph
    this.nodes.remove(node);
  };

  this.removeEdge = function (from, to) {
    let fromNode = nodes.get(from);
    let toNode = nodes.get(to);

    if (fromNode === null || toNode === null) {
      return;
    }

    this.adjacencyList.get(fromNode).remove(toNode);
  };

  print();

  this.addEdge = function (from, to) {
    let fromNode = nodes.get(from);

    if (fromNode === null) {
      console.log("There is no from node!");
    }

    let toNode = nodes.get(to);
    if (toNode === null) {
      console.log("There is no to node.");
    }

    //just adding this one relationship is a unidrected graph
    this.adjacencyList.get(fromNode).add(toNode);
    //adding this line also makes it a non directed graph, we nede to add the inverse relationship
    // this.adjacencyList.get(toNode).add(fromNode);
  };

  this.print = function () {
    for (const [key, value] of this.adjacencyList) {
      let targets = this.adjacencyList.get(key);
      //if there is a value
      if (!targets.isEmpty()) {
        console.log(`${key} is connected to ${target}`);
      }
    }
  };
};
