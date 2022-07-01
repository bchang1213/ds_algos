/**
 *
 * useful in Auto completion
 *
 * Tries are trees, but they are not binary trees. Each child can have several nodes.
 * Tries come from Retrieval. (digital, radix, prefix) tries.
 *
 *
 * autocomplete is a key application of tries.
 *
 * root node is always null in a trie involving the 26th letter alphabet.
 */

const ALPHABET_SIZE = 26;

//utilizing array to implement the nodes.
const Node = function (value) {
  this.value = value;
  this.children = {};
  //array implementation , array length will always be 26
  //   this.children = Array(ALPHABET_SIZE).fill(0);
  this.isEndOfWord = false;
};

const Trie = function () {
  //every trie has a root with a blank node.
  this.root = new Node(" ");

  //new nodes are inserted only when they dont exist.
  //otherwise, we traverse to the existing node and test for the next node.
  this.insert = function (word) {
    let current = this.root;
    let head = current;
    let characterArray = word.split("");

    for (char of characterArray) {
      if (!current.children.hasOwnProperty(char)) {
        current.children[char] = new Node(char);
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
    // console.log("Head:", head);
    // console.log("last node:", current);
  };

  this.contains = function (word) {
    //the last node must have the isEndOfWord flag to true
    let current = this.root;
    let head = current;

    if (word === null || word === undefined) {
      return false;
    }

    let characterArray = word.split("");
    let characterArrayIndex = 0;

    while (current.isEndOfWord !== true) {
      let currentChar = characterArray[characterArrayIndex];

      if (!current.children.hasOwnProperty(currentChar)) {
        return false;
      }
      characterArrayIndex++;
      current = current.children[currentChar];
    }
    console.log("head:", head);
    console.log("Current:", current);
    return true;
  };

  this.containsForLoop = function (word) {
    let current = this.root;

    if (word === null) {
      return false;
    }

    let characterArray = word.split("");

    for (char of characterArray) {
      if (!current.children.hasOwnProperty(char)) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEndOfWord;
  };

  this.traverse = function (root) {
    let current = root;
    console.log("current:", current.value);
    /**
     * first node is a blank node, thus its children with be an array of the first row of nodes
     * the recursive call with pass in the next node of the Trie.
     *
     * we can switch the Pre order or Post Order traversal by console logginb efore the for loop, or after it completes.
     */
    for (child of Object.values(current.children)) {
      this.traverse(child);
    }
  };

  this.remove = function (root, word, index) {
    if (word === null) {
      return;
    }
    //isEndofWord, does the last node have children? if no children, then delete.
    let current = root;

    if (index === word.length) {
      current.isEndOfWord = false;
      return;
    }

    let char = word.charAt(index);
    let child = current.children[char];

    if (child === null || child === undefined) {
      return;
    }

    this.remove(child, word, index + 1);

    //if child doesnt have children, ie is empty
    if (
      Object.values(child.children).length === 0 &&
      child.isEndOfWord === false
    ) {
      //remove the child
      delete current.children[char];
    }
  };
  // AUTO COMPLETE involves autoComplete, findWords, and findLastNodeOf
  this.autoComplete = function (prefix) {
    let words = [];
    let lastNode = this.findLastNodeOf(prefix);
    this.findWords(lastNode, prefix, words);

    return words;
  };

  this.findWords = function (root, prefix, wordsArray) {
    if (root === null) {
      return;
    }
    //if the given node "root" is the end of a word, then we can just add that prefix as a potential word.
    //if the prefix is already the end of a word.
    if (root.isEndOfWord) {
      wordsArray.add(prefix);
    }
    //sometimes we will encounter the end of a prefix, but that prefix will still have multiple potential matches/children.
    //iterate through all those potential children.
    for (child of Object.values(current.children)) {
      this.findWords(child, prefix + child.value, wordsArray);
    }
  };

  //At the end of the for loop, the var current will equal the very last node of a trie that contains the user's prefix.
  this.findLastNodeOf = function (prefix) {
    if (prefix === null) {
      return null;
    }
    let current = this.root;
    let charArray = prefix.split("");
    for (char of charArray) {
      let child = current.children[char];
      if (child === null) {
        return null;
      }
      current = child;
    }
    return current;
  };
};

let newTrie = new Trie();
newTrie.insert("hello");
newTrie.insert("heaven");
// newTrie.contains("hel");

// newTrie.traverse(newTrie.root);
newTrie.remove(newTrie.root, "hello", 0);
newTrie.traverse(newTrie.root);
