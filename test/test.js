'use struct';

const assert = require('power-assert');
const leftistTree = require('..');

describe('leftistTree', function() {
  it('should get a minimum element', function() {
    let heap = null;
    let elements = [5, 3, 0, 8, 7, 9, 1, 4, 2, 6];
    for (let i of elements) {
      heap = leftistTree.insert(heap, i);
    }
    assert.equal(leftistTree.findMin(heap), 0);
  });
  it('should get elements by sorted order', function() {
    let heap = null;
    let elements = [5, 3, 0, 8, 7, 9, 1, 4, 2, 6];
    for (let i of elements) {
      heap = leftistTree.insert(heap, i);
    }
    let arr = [];
    for (let i = 0; i < elements.length; i++) {
      arr.push(leftistTree.findMin(heap));
      heap = leftistTree.deleteMin(heap);
    }
    assert.deepEqual(arr, elements.sort((x, y) => {
      return x > y;
    }));
  });
});
