import sum from '../src/sum'
import { expect } from 'chai'

describe('Example ES6+ Mocha / Chai Test', () => {
  let a = 1
  let b = 2

  beforeEach(() => {
    a = 1
    b = 2
  })

  it('sum should be a function', () => expect(sum).to.be.a('function'))
  it('result should return a number', () => expect(sum(a, b)).to.be.a('number'))
  it(`expect: ${a} + ${b} = ${a + b}`, () => expect(sum(a, b)).to.be.eql(3))
})
