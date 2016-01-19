const path = require('path');
const fs = require('fs');

const MonkeyEval = require('../lib/monkeyeval.js').MonkeyEval;
const monkeyEval = new MonkeyEval();

var sample = function(fileName) {
  var fullName = path.join(__dirname, 'cases', fileName + '.js');
  return fs.readFileSync(fullName).toString('utf8');
};

monkeyEval.on('exec', console.log);
monkeyEval.run(sample('jsfuck'));
monkeyEval.run(sample('aaencode'));