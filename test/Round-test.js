const chai = require("chai");
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card') // need this?
const data = require('../src/data')

describe('Round', function () {
  let round
  let deck

  beforeEach( function () {
    round = new Round()
    deck = new Deck(data.slice(0, 3).map(el => el.id, el.question, el.answers, el.correctAnswer))
  })
  
  it("Should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("Should be an instance of Deck", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('Should have a current Card', () => {
    expect(round.currentCard).to.deep.equal(deck.cards[0])
  })
})