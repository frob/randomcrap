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
 
## Classes

<dl>
<dt><a href="#RandomCrap">RandomCrap</a></dt>
<dd><p>Class for generation of RandomCrap.</p>
<p>Please do not complain about these numbers not being &quot;true&quot; random. The point
behind doing this isn&#39;t to have correct math, but instead to generate numbers
that are fun. This is why the bais exists and can be adjusted. This way the
developer can influence the result to adjust the fun.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#NORMAL_BIAS">NORMAL_BIAS</a> : <code>Number</code></dt>
<dd><p>The Normal Bias needed to create centered Random Number Generation.</p>
</dd>
<dt><a href="#HIGH_ADJUSTER">HIGH_ADJUSTER</a> : <code>Number</code></dt>
<dd><p>The High end on which the random number will be adjusted for randomness.</p>
</dd>
<dt><a href="#LOW_ADJUSTER">LOW_ADJUSTER</a> : <code>Number</code></dt>
<dd><p>The High end on which the random number will be adjusted for randomness.</p>
</dd>
</dl>

<a name="RandomCrap"></a>

## RandomCrap
Class for generation of RandomCrap.

Please do not complain about these numbers not being "true" random. The point
behind doing this isn't to have correct math, but instead to generate numbers
that are fun. This is why the bais exists and can be adjusted. This way the
developer can influence the result to adjust the fun.

**Kind**: global class  

* [RandomCrap](#RandomCrap)
    * [new RandomCrap([biasAdjuster])](#new_RandomCrap_new)
    * [.setBias([bias])](#RandomCrap+setBias)
    * [.getBias()](#RandomCrap+getBias) ⇒ <code>Boolean</code>
    * [.randomFrom(set, [name], [loop])](#RandomCrap+randomFrom)
    * [.simpleRandomAlpha(options)](#RandomCrap+simpleRandomAlpha) ⇒ <code>String</code>
    * [.simpleRandomFloat(wholePrecision, floatPrecision)](#RandomCrap+simpleRandomFloat) ⇒ <code>Float</code>
    * [.simpleRandomInt(min, max)](#RandomCrap+simpleRandomInt) ⇒ <code>Integer</code>

<a name="new_RandomCrap_new"></a>

### new RandomCrap([biasAdjuster])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [biasAdjuster] | <code>Float</code> | <code>&quot;NORMAL_BIAS&quot;</code> | Allows setting a high or low bias for random generation. |

<a name="RandomCrap+setBias"></a>

### randomCrap.setBias([bias])
Sets the current random bias.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [bias] | <code>Float</code> | <code>&quot;NORMAL_BIAS&quot;</code> | Allows setting a high or low bias for random generation. Setting nothing   will reset to neutral bias. |

<a name="RandomCrap+getBias"></a>

### randomCrap.getBias() ⇒ <code>Boolean</code>
Returns the current bias.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  
<a name="RandomCrap+randomFrom"></a>

### randomCrap.randomFrom(set, [name], [loop])
Gets a random element from a supplied set.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| set | <code>Array</code> |  | The set from which to pull a random element. |
| [name] | <code>String</code> | <code>&quot;__default&quot;</code> | The name of the set, if this is set then the random element will be  removed as a possible element in future calls. |
| [loop] | <code>Boolean</code> | <code>&quot;false&quot;</code> | Append the original set back onto the end if the set is empty. |

<a name="RandomCrap+simpleRandomAlpha"></a>

### randomCrap.simpleRandomAlpha(options) ⇒ <code>String</code>
Returns a random alpha character.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Optional arguments. |
| [options.allCaps] | <code>Boolean</code> | <code>&quot;false&quot;</code> | Only return Capitalized letters. |
| [options.noCaps] | <code>Boolean</code> | <code>&quot;false&quot;</code> | Never return Capitalized letters. |
| [options._set] | <code>Array</code> | <code>&quot;[a, b, c, ... z]&quot;</code> | Inject set, useful for testing, or localization. |

<a name="RandomCrap+simpleRandomFloat"></a>

### randomCrap.simpleRandomFloat(wholePrecision, floatPrecision) ⇒ <code>Float</code>
Returns a simple random floating point Number.

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| wholePrecision | <code>Integer</code> | The number of precision to the left of the decimal point. |
| floatPrecision | <code>Integer</code> | The number of precision to the right of the decimal point. |

<a name="RandomCrap+simpleRandomInt"></a>

### randomCrap.simpleRandomInt(min, max) ⇒ <code>Integer</code>
Returns a random integer from min (inclusive) to max (inclusive).

**Kind**: instance method of <code>[RandomCrap](#RandomCrap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Integer</code> | The lowest number to return. |
| max | <code>Integer</code> | The highest number to return. |

<a name="NORMAL_BIAS"></a>

## NORMAL_BIAS : <code>Number</code>
The Normal Bias needed to create centered Random Number Generation.

**Kind**: global constant  
<a name="HIGH_ADJUSTER"></a>

## HIGH_ADJUSTER : <code>Number</code>
The High end on which the random number will be adjusted for randomness.

**Kind**: global constant  
<a name="LOW_ADJUSTER"></a>

## LOW_ADJUSTER : <code>Number</code>
The High end on which the random number will be adjusted for randomness.

**Kind**: global constant  
