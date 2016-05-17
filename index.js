'use strict';

const NORMAL_BIAS = 0.289;
const HIGH_ADJUSTER = 10;
const LOW_ADJUSTER = 1

/**
 * Instantiates a RandomCrap Object.
 *
 * @param {Float} biasAdjuster
 *   Allows setting a high or low bias for random generation.
 */
class RandomCrap {

  constructor (biasAdjuster) {
    // This is used in the random number generation to allow for high or low
    // biasing. This can be used in a game to adjust the fun or difficulty.
    this.biasAdjuster = (typeof biasAdjuster === 'undefined') ? NORMAL_BIAS : biasAdjuster;
  }

  /**
   * Sets the current random bias.
   *
   * @param {Float} bias
   *   Allows setting a high or low bias for random generation. Setting nothing
   *   will reset to neutral bias.
   */
  setBias (bias) {
    this.biasAdjuster = (typeof bias === 'undefined') ? NORMAL_BIAS : bias;
  }

  /**
   * Returns the current bias.
   *
   * @return {Boolean}
   */
  getBias () {
    return this.biasAdjuster;
  }

  /**
   * Gets a random element from a supplied set.
   *
   * @param {Array} set
   *  The set from which to pull a random element.
   *
   * @param {String} name
   *  The name of the set, if this is set then the random element will be
   *  removed as a possible element in future calls.
   *
   * @param {Boolean} loop
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

  simpleRandomAlpha (options) {
    options = Object.assign({}, options || {});
    // In order to test this, we need to be able to inject the alpha set.
    const alpha = (typeof options._set === 'undefined') ? [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ] : options._set;

    const allCaps = (typeof options.allCaps === 'undefined') ? false : options.allCaps;
    const noCaps = (typeof options.noCaps === 'undefined') ? false : options.noCaps;

    if (allCaps && noCaps) {
      return '';
    }

    // This line might just be being too clever, but it works and it looks more
    // elegent than a bunch of if else statements.
    return (allCaps) ? this.randomFrom(alpha).toUpperCase() :
      (noCaps) ? this.randomFrom(alpha).toLowerCase() :
      (this.randomFrom([true,false,true,false,true,false])) ? this.randomFrom(alpha).toUpperCase() : this.randomFrom(alpha);
  }

  /**
   * Returns a simple random floating point Number.
   *
   * @param {Integer} wholePrecision
   *  The number of precision to the left of the decimal point.
   *
   * @param {Integer} floatPrecision
   *  The number of precision to the right of the decimal point.
   *
   * @return {Float}
   */
  simpleRandomFloat (wholePrecision, floatPrecision) {
    let whole = (wholePrecision > 0) ? this.simpleRandomInt(9, 1) : '0';
    for (let i = 1; i < wholePrecision; i++) {
      whole += '' + this.simpleRandomInt(0, 9);
    }

    let float = 0;
    for (let i = 1; i < floatPrecision; i++) {
      float += '' + this.simpleRandomInt(0, 9);
    }

    return Number.parseFloat(whole + '.' + float);
  }

  /**
   * Returns a random integer from min (inclusive) to max (inclusive).
   *
   * @param {Integer} min
   *  The lowest number to return.
   *
   * @param {Integer} max
   *  The highest number to return.
   *
   * @return {Array}
   */
  simpleRandomInt (min, max) {
    const mathRandom = Math.random();
    const likelyAdjuster = Math.floor(mathRandom * ((HIGH_ADJUSTER + 1) - LOW_ADJUSTER)) + LOW_ADJUSTER;
    let random = parseFloat('0.' + (Math.random() * mathRandom * (new Date().getTime())));

    // This algorithm has no basis in math and it naturally biases low,
    // therefore it will need some adjustment from time to time. This has been
    // tested and with its defaults comes out to be random.
    if (random < this.biasAdjuster && Math.round(mathRandom * 100) % likelyAdjuster > 0) {
      random += this.biasAdjuster;
    }

    return Math.floor(random * ((max + 1) - min)) + min;
  }
}

module.exports = RandomCrap;
