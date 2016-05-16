'use strict';

const RandomCrap = require('./index.js');
const rc = new RandomCrap();

console.log('Test Bias');
let sum = 0;
const iterations = 10000;
const ideal = ((sum + iterations)/2)
console.log('control: ' + ideal);
for (let j = 0; j < iterations; j ++) {
  sum += rc.simpleRandomInt(0, iterations);
}
const actual = sum/iterations;
console.log('actual: ' + actual);
console.log('Assert Bias within 5% of true random|true: ' + (Math.abs(ideal - actual) <= (ideal * 0.05)));

console.log('Test simpleRandomFloat');
const float = rc.simpleRandomFloat(5,7)
console.log('float: ' + float);
console.log('Assert Number is returned|true: ' + (float < float + 10));

console.log('Test randomFrom');
const testSet = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(rc.randomFrom(testSet, 'testSet', true));
}
console.log(testSet);
console.log(randomArray);
// @TODO: Things to test.
// undefined in non looped set
// no duplicates in named set that is not looped
// in limited loop set [ 1, 2, 3 ] only elements from set and no undefined
// are returned.
