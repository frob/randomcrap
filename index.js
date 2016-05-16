'use strict';

const NORMAL_BIAS = 0.289;
const HIGH_ADJUSTER = 10;
const LOW_ADJUSTER = 1

class RandomCrap {
  /**
   * Constructor.
   *
   * @param biasAdjuster float
   *   Allows setting a high or low bias for random generation.
   */
  constructor (biasAdjuster) {
    // This is used in the random number generation to allow for high or low
    // biasing. This can be used in a game to adjust the fun or difficulty.
    this.biasAdjuster = (typeof biasAdjuster === 'undefined') ? NORMAL_BIAS : biasAdjuster;
  }

  /**
   * Sets the current random bias.
   *
   * @param bias float
   *   Allows setting a high or low bias for random generation. Setting nothing
   *   will reset to neutral bias.
   */
  setBias (bias) {
    this.biasAdjuster = (typeof bias === 'undefined') ? NORMAL_BIAS : bias;
  }

  /**
   * Returns the current bias.
   */
  getBias () {
    return this.biasAdjuster;
  }

  /**
   * Gets a random element from a supplied set.
   *
   * @param set Array
   *  The set from which to pull a random element.
   *
   * @param name String
   *  The name of the set, if this is set then the random element will be
   *  removed as a possible element in future calls.
   *
   * @param loop Boolean
   *  Append the original set back onto the end if the set is empty.
   */
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

  simpleRandomFloat (wholePercision, floatPercision) {
    let whole = (wholePercision > 0) ? this.simpleRandomInt(9, 1) : '0';
    for (let i = 1; i < wholePercision; i++) {
      whole += '' + this.simpleRandomInt(0, 9);
    }

    let float = 0;
    for (let i = 1; i < floatPercision; i++) {
      float += '' + this.simpleRandomInt(0, 9);
    }

    return Number.parseFloat(whole + '.' + float);
  }

  /**
   * Returns a random integer from min (inclusive) to max (inclusive).
   *
   * @param min Integer
   *  The lowest number to return.
   *
   * @param max Integer
   *  The highest number to return.
   */
  simpleRandomInt (min, max) {
    const mathRandom = Math.random();
    const likelyAdjuster = Math.floor(mathRandom * ((HIGH_ADJUSTER + 1) - LOW_ADJUSTER)) + LOW_ADJUSTER;
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
