#!/usr/bin/env node --harmony --harmony_arrow_functions

'use strict';

const fs = require('fs');

require('colors');

const deobfuscator = require('./');

// run as a command line tool
//
// Usage:
//   node deobfuscator.js input [output]
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
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk && chunk.length) {
      try {
        console.log(deobfuscator.clean(chunk).green);
      } catch (ex) {
        if (ex.lineNumber && ex.column) {
          console.log(`Error: ${ex.description} at line ${ex.lineNumber}, col ${ex.column}`.red);
        }
      }
    }
    process.stdout.write('> ');
  });
}

