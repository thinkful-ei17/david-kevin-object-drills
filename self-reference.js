/*
Modify personMaker.fullName to be a function that uses self-reference (via this) in order to return the firstName and lastName properties separated by a space.

So, for instance, if firstName was 'Jane' and lastName was 'Doe', fullName() should return 'Jane Doe'.
*/



function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: null,
  };
  return person;
}

/*
tests:
*/

(function testPersonMaker() {
  var person = personMaker();
  if (typeof person !== 'object') {
    console.error('ERROR: `personMaker` must return an object');
    return false;
  }
  if (typeof person.fullName !== 'function') {
    console.error('ERROR: `fullName` must be a method');
    return false;
  }
  if (person.fullName() !== 'Paul Jones') {
    console.error(
      'ERROR: The value for `fullName` should be "Paul Jones" but was ' +
        person.fullName()
    );
    return false;
  }
  person.firstName = 'Lisa';
  person.lastName = 'Simpson';
  if (person.fullName() !== 'Lisa Simpson') {
    console.error(
      '`personMaker` is not using self reference correctly. ' +
        'When firstName set to "Lisa" and lastName set to "Simpson", ' +
        'should return "Lisa Simpson" but returned ' +
        person.fullName()
    );
  }
  console.log('SUCCESS: `updateObject` works correctly!');
})();
