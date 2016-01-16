'use strict';

const vm = require('vm');

const events = exports.EVENTS = [
  'documentWrite',
  'alert',
  'newActivex'
];

const nullFunc = function() {};

/**
 * for deobfuscating eval based javascript
 */
class MonkeyEval {
  constructor(opt) {
    this.opt = opt || {};
    this.handlers = {};
    events.forEach(event => this.handlers[event] = nullFunc)

    let self = this;
    let dummyComObject = cls => {
      self.fire('newActivex', cls);
      let dummyCom = {};
      // todo: 
      return dummyCom;
    };

    let sandbox = this.sandbox = {
      __Function__: function(code) {
        return function() {
          sandbox.eval(code);
        }
      },

      // browser
      alert: msg => self.fire('alert', msg),
      document: {
        write: html => self.fire('documentWrite', html),
        writeln: html => self.fire('documentWrite', html + '\n'),
      },

      // wscript
      WScript: {
        CreateObject: dummyComObject
      },

      // both browser and wscript
      ActivexObject: dummyComObject
    };

    ['setTimeout', 'setInterval', 'eval'].forEach(func => sandbox[func] = (() => {
      return code => {
        console.info(`new code executed:\n${func}("${code}")\n`);
        return self.run(code);
      }
    })());

    let context = this.context = vm.createContext(sandbox);
    let monkeyPatch = new vm.Script('Function.prototype.constructor = __Function__;');
    monkeyPatch.runInContext(context);
  }

  /**
   * evaluate code in class context
   * @param  {String} code 
   * @return {Any}      result
   */
  run(code) {
    try {
      return vm.runInContext(code, this.sandbox, {timeout: this.opt.timeout || 100});
    } catch(err) {
      console.error(`timeout exceed while executing "${code}"`);
    }
  }

  on(event, handler) {
    this.handlers[event] = handler;
    return this;
  }

  fire(event, data) {
    // todo: use args
    this.handlers[event](data);
    return this;
  }
}

exports.MonkeyEval = MonkeyEval;