/*
Find by id
Spend up to 15 minutes writing a function called findById. This function takes 2 arguments, items and idNum. items is an array of objects. idNum is the id we're trying to find in items. The function should look for an item with the id idNum in the array items. If found, it should return that item.

For example:

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
findById(data, 2) // should return {id: 2, foo: 'bizz'}
*/

// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  // your code here
}

//tests

function testIt() {
  const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' + result.id
    );
    return;
  }
  if (result.bang !== 'boo') {
    console.error(
      'Expected all key/value pairs from target object to be returned'
    );
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();
