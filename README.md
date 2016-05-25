# randomcrap

This is a dependency free random crap generator. Currently it handles getting random simple random ints, but I will be adding stuff to it as I need it for my other projects.

This has more entropy than ```Math.random()``` but isn't going to be adequate for crypto. For that I suggest [GRC javascript peudo-random number generator](https://www.grc.com/otg/uheprng.htm) or [Web Cryptography API](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues).

## Planned additions
- [x] random int
- [x] random from set
- [x] random float
- [x] random alpha
- [x] random alpha numeric
- [ ] random emoji

## API

This is meant to be a flexible yet not cryptography sound random number generator. The numbers should look good, and the bias is adjustable. A high bias will yield higher random numbers from sets. This bias can be set through the constructor or through a setter function.
<a name="RandomCrap"></a>

## RandomCrap
Instantiates a RandomCrap Object.

**Kind**: global class  

* [RandomCrap](#RandomCrap)
    * [new RandomCrap(biasAdjuster)](#new_RandomCrap_new)
    * [.setBias(bias)](#RandomCrap+setBias)
    * [.getBias()](#RandomCrap+getBias) ⇒ <code>Boolean</code>
    * [.randomFrom(set, name, loop)](#RandomCrap+randomFrom)
    * [.simpleRandomAlpha(options)](#RandomCrap+simpleRandomAlpha) ⇒ <code>String</code>
    * [.simpleRandomFloat(wholePrecision, floatPrecision)](#RandomCrap+simpleRandomFloat) ⇒ <code>Float</code>
    * [.simpleRandomInt(min, max)](#RandomCrap+simpleRandomInt) ⇒ <code>Array</code>

<a name="new_RandomCrap_new"></a>

### new RandomCrap(biasAdjuster)

| Param | Type | Description |
| --- | --- | --- |
| biasAdjuster | <code>Float</code> | Allows setting a high or low bias for random generation. |

<a name="RandomCrap+setBias"></a>

### randomCrap.setBias(bias)
Sets the current random bias.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| bias | <code>Float</code> | Allows setting a high or low bias for random generation. Setting nothing   will reset to neutral bias. |

<a name="RandomCrap+getBias"></a>

### randomCrap.getBias() ⇒ <code>Boolean</code>
Returns the current bias.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  
<a name="RandomCrap+randomFrom"></a>

### randomCrap.randomFrom(set, name, loop)
Gets a random element from a supplied set.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Array</code> | The set from which to pull a random element. |
| name | <code>String</code> | The name of the set, if this is set then the random element will be  removed as a possible element in future calls. |
| loop | <code>Boolean</code> | Append the original set back onto the end if the set is empty. |

<a name="RandomCrap+simpleRandomAlpha"></a>

### randomCrap.simpleRandomAlpha(options) ⇒ <code>String</code>
Returns a random alpha character.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Optional arguments:   {     allCaps: {Boolean},       Only return Capitalized letters.     noCaps: {Boolean},       Never return Capitalized letters.     _set: {Array},       Inject set, useful for testing, or localization.   } |

<a name="RandomCrap+simpleRandomFloat"></a>

### randomCrap.simpleRandomFloat(wholePrecision, floatPrecision) ⇒ <code>Float</code>
Returns a simple random floating point Number.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| wholePrecision | <code>Integer</code> | The number of precision to the left of the decimal point. |
| floatPrecision | <code>Integer</code> | The number of precision to the right of the decimal point. |

<a name="RandomCrap+simpleRandomInt"></a>

### randomCrap.simpleRandomInt(min, max) ⇒ <code>Array</code>
Returns a random integer from min (inclusive) to max (inclusive).

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Integer</code> | The lowest number to return. |
| max | <code>Integer</code> | The highest number to return. |

