var regexp = /^[\w\s.-]+\d+,\s*[\w\s.-]+$/;
console.log(regexp.test('Main St. 123, New York'));
console.log(regexp.test('123 Wall St., New York'));
