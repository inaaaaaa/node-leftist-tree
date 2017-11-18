'use struct';

function newTree(rank, elem, left, right) {
  return {rank: rank, elem: elem, left: left, right: right};
}

function isEmpty(heap) {
  return heap === null;
}

function _makeT(x, a, b) {
  if (isEmpty(a)) {
    return newTree(b.rank + 1, x, b, null);
  }
  if (isEmpty(b)) {
    return newTree(a.rank + 1, x, a, null);
  }
  if (a.rank >= b.rank) {
    return newTree(a.rank + 1, x, a, b);
  } else {
    return newTree(b.rank + 1, x, b, a);
  }
}

function merge(heap0, heap1) {
  if (isEmpty(heap0)) {
    return heap1;
  }
  if (isEmpty(heap1)) {
    return heap0;
  }
  if (heap0.elem < heap1.elem) {
    return _makeT(heap0.elem, heap0.left, merge(heap0.right, heap1));
  } else {
    return _makeT(heap1.elem, heap1.left, merge(heap1.right, heap0));
  }
}

function insert(heap, elem) {
  return merge(heap, newTree(1, elem, null, null));
}

function findMin(heap) {
  if (isEmpty(heap)) {
    return null;
  }
  return heap.elem;
}

function deleteMin(heap) {
  if (isEmpty(heap)) {
    return null;
  }
  return merge(heap.left, heap.right);
}

module.exports = {
  newTree: newTree,
  isEmpty: isEmpty,
  merge: merge,
  insert: insert,
  findMin: findMin,
  deleteMin: deleteMin,
};
