'use strict';

const RandomCrap = require('./index.js');
const rc = new RandomCrap();

let sum = 0;
const iterations = 10000;
const tenSet = [1, , 12,3,4,5,6,7,8,9,10];
console.log(rc.randomFrom(tenSet));

console.log('control: ' + ((sum + iterations)/2));

for (let i = 0; i < iterations; i ++) {
  sum += rc.simpleRandomInt(0, iterations);
  // rc.setBias(rc.getBias() + i);
}

console.log('actual: ' + sum/iterations);
