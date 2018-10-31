/*
 * This module serves 2 primary functions
 *
 * create()
 * takes a dictionary
 * returns trie data structure
 *
 * check()
 * takes a trie and a query
 * returns a result from querying the trie
 *
 * you should not alter the arguments for create or check
 * you may create any helper functions that you might need
 *
 */

/*
 * Write an algorithm that builds a trie structure from a dictionary
 *   during development, use `npm run test:create`
 *   it may be more convenient to use nodemon `npx nodemon test/create`
 *
 * parameters:
 *   @dictionary   an object containing words and definitions
 *                 see ./test/sample-dictionary.json as a reference
 * returns:
 *   An object containing all words from given dictionary
 *   stored in a Trie structure that is compatible with check()
 */
class Node {
  constructor(data, children=none, value=none) {
    this.data = data; 
    if (!children) {
      this.children = {};
    } 
    this.value = value; 
  }
}

class Trie {
  constructor() {
    this.root = Node('root');
  }
}

 const create = dictionary => {
  // takes in an object with key: value pairs of word: definition-object
  // definition-object is a key: value of "definition": string for definition of this this word
  // Output: return an object of Nodes
  // each Node has a "value" set to null or an object of "definition": string for definition for this word
  // if the value is null, this is not the end of a word. 
  // Each Node has a "children" value set to either {} if this node is the end of a word input
  // or set to some number of following Nodes representing letters of an input word. 

  result = {"value": null, "children": {}};
  // seperate each input word
    for (var word in dictionary) {
      var definition = dictionary[word];
      curr = result.children; 
      // insert word into our Trie
      for (var i of word) {
        if (curr[word[i]]) {
          // adding to an exisiting Node
          if (i == word.length - 1 ) {
            prop.value = definition; 
          }
        } else {
          // create a Node for this letter & input data
          const prop = {};
          prop.children = {};
          if (i == word.length - 1 ) {
            prop.value = definition; 
          } else { 
            prop.value = null;
          }
          curr[word[i]] = prop; 
        // next letter will be nested inside current Node children
        curr = curr[word[i]].children; 
        }
      }  // end looping for each letter in this word
    } // end for looping for each input word: definition

  return {result};
}  // end const create(dictionary)

/*
 * Write an algorithm that checks a trie for a query
 *   during development, use `npm run test:check`
 *   it may be more convenient to use nodemon `npx nodemon test/check`
 *
 * parameters:
 *   @trie         a Trie structure containing all words in a dictionary
 *                 see ./test/sample-trie.json for the object shape
 *
 *   @query        a String input to check the trie for existing nodes
 *
 * returns:
 *   @result that is one of:
 *
 *   node value    the value of a node if the trie contains the query in either a branch or a leaf node
 *   true          if the trie contains the query in a branch and is not a leaf node (does not have a value)
 *   false         if the trie does not contain the query in either a branch or a leaf node
 *
 * @result if query found a leaf node that is not a branch
 *   { ...the data stored in this node }
 *
 * @result if query found a leaf node that is also a branch
 *   { ...the data stored in this node }
 *
 * @result if query found a branch that is not a leaf node
 *   true
 *
 * @result if query did not find a leaf node or branch
 *   false
 *
 */
const check = ( trie, query ) => {

  return {};
}

module.exports = {
  create,
  check,
};
