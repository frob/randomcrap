'use strict';

class RandomCrap {
  constructor() {
    this.biasAdjuster = 0.289;
  }
  const biasAdjuster;
  /**
   * Returns a random integer from min (inclusive) to max (inclusive).
   */
  simpleRandomInt(min, max) {
    const mathRandom = Math.random();
    const likelyAdjuster = Math.floor(mathRandom * ((10 + 1) - 1)) + 1;
    let random = parseFloat('0.' + (Math.random() * mathRandom * (new Date().getTime())));

    // This algorythm has no basis in math and it naturally biases low,
    // therefore it will need some adjustment from time to time. This has been
    // tested and with its defaults comes out to be random.
    if (random < this.biasAdjuster && Math.round(mathRandom * 100) % likelyAdjuster > 0) {
      random += this.biasAdjuster;
    }

    return Math.floor(random * ((max + 1) - min)) + min;
  }
}

module.exports = RandomCrap;
