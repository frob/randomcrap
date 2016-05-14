'use strict';

class RandomCrap {
  /**
   * Returns a random integer from min (inclusive) to max (inclusive).
   */
  simpleRandomInt(min, max) {
    const mathRandom = Math.random();
    const likelyAdjuster = Math.floor(mathRandom * ((10 + 1) - 1)) + 1;
    const biasAdjuster = 0.289;
    let random = parseFloat('0.' + (Math.random() * mathRandom * (new Date().getTime())));

    // This algorythm has no basis in math and it naturally biases low,
    // therefore it will need some adjustment from time to time. This has been
    // tested and with its defaults comes out to be random.
    if (random < biasAdjuster && Math.round(mathRandom * 100) % likelyAdjuster > 0) {
      random += biasAdjuster;
    }

    return Math.floor(random * ((max + 1) - min)) + min;
  }
}

module.exports = RandomCrap;
