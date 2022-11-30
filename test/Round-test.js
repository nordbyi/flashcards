const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card"); // need this?
const data = require("../src/data");

describe("Round", function () {
  let round;
  let deck;

  beforeEach(function () {
    deck = new Deck(
      data.prototypeData.slice(0, 3).map(
        (el) => new Card(el.id, el.question, el.answers, el.correctAnswer)
      )
    );
    round = new Round(deck);
  });

  it("Should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("Should be an instance of Deck", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it("Should have a current Card", () => {
    expect(round.currentCard).to.deep.equal(deck.cards[0]);
  });

  it('Should be able to return the currentCard', () => {
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0])
  })

  it('Should have a turns property', () => {
    expect(round.turns).to.equal(0)
  })


});
