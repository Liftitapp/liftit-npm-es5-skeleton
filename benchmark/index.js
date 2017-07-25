'use strict'

import benchmark from 'benchmark'
import { sum } from '../src/sum'

const suite = new benchmark.Suite

const a = 1
const b = 2

let result = 0

suite
  .add('sum module addition with 2 numbers', function () {
    result = sum(a, b)
  })
  .add('sum module addition with 2 numbers', function () {
    result = a + b
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
