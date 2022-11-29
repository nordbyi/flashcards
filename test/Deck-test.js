const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");

describe('Deck', function () {
  let deck

  beforeEach(function () {
    deck = new Deck()
  })

  it('Should be a function', () => {
    expect(Deck).to.be.a("function");
  })

  it('Should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  })
})
