'use strict';

const expect = require('chai').expect;

const deobfuscator = require('../');
const sample = require('./cases').sample;

describe('jsobfuscate', function() {
  it('should evaluate literals', function(done) {
    let code = sample('jsobfuscator.com');
    let simplified = deobfuscator.clean(code);
    expect(simplified).to.be.not.empty;
    done();
  });
});

describe('expression_expand', function() {

});