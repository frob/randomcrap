# randomcrap

This is a dependency free random crap generator. Currently it handles getting random simple random ints, but I will be adding stuff to it as I need it for my other projects.

This has more entropy than ```Math.random()``` but isn't going to be adequate for crypto. For that I suggest [GRC javascript peudo-random number generator](https://www.grc.com/otg/uheprng.htm) or [Web Cryptography API](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues).

## API

```simpleRandomInt (min, max)```
!Returns a simple random int from minimum to maximum inclusive.

## Planned additions
- [x] random int
- [x] random from set
- [ ] random float
- [ ] random alpha
- [ ] random alpha numeric
- [ ] random emoji
