#!/usr/bin/env node

'use strict';

const fs = require('fs');
const readline = require('readline');
require('colors');

const deobfuscator = require('./');

// run as a command line tool
//
// Usage:
//   node cli.js input [output]
//

if ([3, 4].indexOf(process.argv.length) > -1) {
  let src = process.argv[2];
  let dst = process.argv[3];

  let code = fs.readFileSync(src).toString('utf8');
  code = deobfuscator.clean(code);
  if (dst)
    fs.writeFile(dst, code);
  else
    console.log(code.green);

} else if (process.argv.length === 2) {
  const rl = readline.createInterface({input: process.stdin, output: process.stdout});
  rl.setPrompt('deobfuscate> ');
  rl.prompt();

  rl.on('line', function(line) {
    try {
      console.log(deobfuscator.clean(line).green);
    } catch (ex) {
      if (ex.lineNumber && ex.column) {
        console.log(`Error: ${ex.description} at line ${ex.lineNumber}, col ${ex.column}`.red);
      }
    }
    rl.prompt();
  }).on('close', function() {
    console.log('\nbye');
    process.exit(0);
  });

  process.stdin.setEncoding('utf8');
}

