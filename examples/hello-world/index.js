const json2html = require('../../index.js');
const input = require('./input.js');

console.log('input:\n', JSON.stringify(input, null, 2));

json2html(input)
  .then(output => console.log(`output:\n${output}`))
  .catch(console.error);
