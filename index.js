'use strict';

const escodegen = require('escodegen');
const esprima = require('esprima');
const simplifier = require('./lib/simplifier.js');

exports.simplify = simplifier.simplify;
exports.clean = code => escodegen.generate(simplifier.simplify(esprima.parse(code)));
