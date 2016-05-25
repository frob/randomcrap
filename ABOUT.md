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
