const BinarySearchTree = require("./bstClass");
// Draw a BST
// Given the following data 3,1,4,6,9,2,5,7. If you were to insert this into an empty Binary Search Tree, how would the tree look like? (Draw the tree, no coding needed here)
/*
          3
         / \
        1   4
         \    \
          2    6
               /\
              5  9
                /
               7 
*/

// Remove the root
// Show how the tree would look like if you deleted the root. (Draw the tree, no coding needed here)
/*
           4
         /   \
        1     6
         \   /  \
          2 5    9
                /
               7 
*/

// Create a BST class
// Walk through the Binary Search Tree code in the curriculum and understand it well. Then write a Binary Search Tree class and with its core functions (insert, remove, find) from scratch.

// Create a Binary Search Tree called BST and insert 3,1,4,6,9,2,5,7 to your tree. Compare your result with the result from the first exercise

const BST = new BinarySearchTree();

BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);
BST.insert(0);

// console.log(BST.find(BST.key));

// Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the run time of your algorithm?

const findHeight = function(tree) {
  let currentNode = tree;
  let leftSide = 0;
  let rightSide = 0;

  if (currentNode.left === null && currentNode.right === null) {
    return 1;
  }
  if (currentNode.left !== null) {
    leftSide = 1 + findHeight(currentNode.left);
  }
  if (currentNode.right !== null) {
    rightSide = 1 + findHeight(currentNode.right);
  }
  return (height = leftSide >= rightSide ? leftSide : rightSide);
};

console.log(findHeight(BST));

// is it BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates
function isBST(tree) {
  let currentNode = tree;
  let results = true;
  if (currentNode.left !== null && currentNode.left.key > currentNode.key) {
    console.log("first base case");
    results = false;
  }
  if (currentNode.right !== null && currentNode.right.key < currentNode.key) {
    console.log("second base case");
    results = false;
  }
  if (currentNode.left === null && currentNode.right === null) {
    console.log("third base case");
    results = true;
  }
  if (currentNode.left !== null && currentNode.left.key < currentNode.key) {
    console.log("continuing left");
    isBST(currentNode.left);
  }
  if (currentNode.right !== null && currentNode.right.key > currentNode.key) {
    console.log("continuing right");
    isBST(currentNode.right);
  }
  return results;
}

console.log(isBST(BST));

// Third largest node
// Write an algorithm to find the third largest node in a binary search tree

// Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e. a tree where no two leaves differ in distance from the root by more than one).
