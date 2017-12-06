/*
Make student reports
Take up to 10 minutes to write a function called makeStudentReport that takes a single argument, data. data is an array of objects. Each object in the array represents a student and their letter grade for a course — for example, {name: 'Johnny Robot', grade: 'C'}.

makeStudentReport should return an array of strings. For each item in data, return a string that looks like this: '[name]: [grade]'. The name and grade values on the student object should be substituted in.
*/

function makeStudentsReport(data) {
 return data.map(d => `${d.name}: ${d.grade}`);
}

// tests

function testIt() {
  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];

  const results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `makeStudentsReport` must return an array');
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' +
        testData.length +
        ' but `makeStudentsReport` returned array of length ' +
        results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
      );
      return;
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();
