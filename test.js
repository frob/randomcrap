'use strict';

const RandomCrap = require('./index.js');
const rc = new RandomCrap();

let sum = 0;
const iterations = 10000;

console.log('control: ' + ((sum + iterations)/2));

for (let i = 0; i < iterations; i ++) {
  sum += rc.simpleRandomInt(0, iterations);
}

console.log('actual: ' + sum/iterations);
