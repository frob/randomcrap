'use strict';

class RandomCrap {
  /**
   * Returns a random integer from min (inclusive) to max (inclusive).
   */
  simpleRandomInt(min, max) {
    const random = parseFloat('0.' + Math.random() * (new Date().getTime()) + Math.random());
    return Math.floor(random * ((max + 1) - min)) + min;
  }
}

module.exports = RandomCrap;
