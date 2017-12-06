/*
Deleting keys:

Modify the keyDeleter function so that it deletes keys for foo and bar for any object passed in and then returns the modified object.
*/

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

/*
tests:
*/

(function testKeyDeleter() {
  var obj = keyDeleter({
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  });

  if (typeof obj !== 'object') {
    console.error('ERROR: `keyDeleter` must be return an object');
    return false;
  }
  ['foo', 'bar'].forEach(function(key) {
    if (key in obj) {
      console.error('`keyDeleter` did not delete the key for ' + key);
      return false;
    }
  });
  ['bizz', 'bang'].forEach(function(key) {
    if (!(key in obj && obj[key] === key)) {
      console.error('`keyDeleter` is deleting keys other than `foo` and `bar`');
      return false;
    }
  });
  console.log('SUCCESS: `keyDeleter` works correctly!');
})();
