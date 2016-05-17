# randomcrap

This is a dependency free random crap generator. Currently it handles getting random simple random ints, but I will be adding stuff to it as I need it for my other projects.

This has more entropy than ```Math.random()``` but isn't going to be adequate for crypto. For that I suggest [GRC javascript peudo-random number generator](https://www.grc.com/otg/uheprng.htm) or [Web Cryptography API](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues).

## API

This is meant to be a flexible yet not cryptography sound random number generator. The numbers should look good, and the bias is adjustable. A high bias will yield higher random numbers from sets. This bias can be set through the constructor or through a setter function.

### setBias

```setBias (bias)```
!Sets the current random bias.

@param bias float
!Allows setting a high or low bias for random generation. Setting nothing will reset to neutral bias.

### getBias
```getBias ()```
!Returns the current bias.

### simpleRandomInt

```simpleRandomInt (min, max)```
!Returns a random integer from min (inclusive) to max (inclusive).

@param min Integer
!The lowest number to return.

@param max Integer
!The highest number to return.

### randomFrom

```randomFrom (set, name, loop)```
!Gets a random element from a supplied set.

@param set Array
!The set from which to pull a random element.

@param name String
!The name of the set, if this is set then the random element will be removed as a possible element in future calls.

@param loop Boolean
!Append the original set back onto the end if the set is empty.

### simpleRandomFloat
```simpleRandomFloat (wholePrecision, floatPrecision)```
!Returns a simple random floating point Number.

@param wholePrecision Integer
!The number of precision to the left of the decimal point.

@param floatPrecision Integer
!The number of precision to the right of the decimal point.

@return Float

### simpleRandomAlpha

```simpleRandomAlpha (options)```
!Returns a random alpha character.

@param {Object} options

options.allCaps: {Boolean},
!Only return Capitalized letters.

options.noCaps: {Boolean},
!Never return Capitalized letters.

_set: {Array},
!Inject set, useful for testing, or localization.

@return {String}

## Planned additions
- [x] random int
- [x] random from set
- [x] random float
- [x] random alpha
- [ ] random alpha numeric
- [ ] random emoji
