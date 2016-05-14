'use strict';

class RandomCrap {
  /**
   * @param biasAdjuster float
   *   Allows setting a high or low bias for random generation.
   */
  constructor (biasAdjuster) {
    // This is used in the random number generation to allow for high or low
    // biasing. This can be used in a game to adjust the fun or difficulty.
    this.biasAdjuster = (typeof biasAdjuster === 'undefined') ? 0.289 : biasAdjuster;
  }

  /**
   * @param bias float
   *   Allows setting a high or low bias for random generation. Setting nothing
   *   will reset to neutral bias.
   */
  setBias (bias) {
    this.biasAdjuster = (typeof bias === 'undefined') ? 0.289 : bias;
  }

  getBias () {
    return this.biasAdjuster;
  }

  randomFrom(set, name, loop) {
    this.sets = (typeof this.sets === 'undefined') ? [] : this.sets;
    name = (typeof name === 'undefined') ? '__default' : name;
    loop = (typeof loop === 'undefined') ? false : true;
    let fromSet = (name === '__default') ? set.concat() : ((typeof this.sets[name] === 'undefined') ? set.concat() : this.sets[name]);

    if (loop && fromSet.length === 0) {
      fromSet = set.concat();
    }

    const length = fromSet.length;
    const keys = fromSet.keys();
    const indexMap = [ ... fromSet.keys() ];
    const indexGet = this.simpleRandomInt(0, length - 1);
    const randomElement = fromSet[indexMap[indexGet]];

    fromSet.splice(indexMap[indexGet], 1);
    this.sets[name] = fromSet;

    return randomElement;
  }

  /**
   * Returns a random integer from min (inclusive) to max (inclusive).
   */
  simpleRandomInt (min, max) {
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
