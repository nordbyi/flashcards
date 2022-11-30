const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn")
const Card = require("../src/Card");
const data = require("../src/data");

describe("Round", function () {
  let round;
  let deck;
  let turn

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

  it('Should have an incorrectGuesses property', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('Should update turn count on correct guess', () => {
    round.takeTurn('object')
    expect(round.turns).to.equal(1)
  })

  it('Should also update turn count on incorrect guess', () => {
    round.takeTurn('array')
    expect(round.turns).to.equal(1)
  })

  it('Should update the currentCard on correct guess', () => {
    round.takeTurn('object')
    expect(round.currentCard).to.deep.equal(deck.cards[1])
  })

  it('Should also update the currentCard on incorrect guess', () => {
    round.takeTurn('array')
    expect(round.currentCard).to.deep.equal(deck.cards[1])
  })

  it('Should store the ids of incorrect guesses', () => {
    round.takeTurn('array')
    expect(round.incorrectGuesses[0]).to.equal(1)
  })

  it('Should not store the id of correct guesses', () => {
    round.takeTurn('array')
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('Should return the feedback if the guess is correct', () => {
    expect(round.takeTurn('object')).to.equal('correct!')
  })

  it('Should return the feedback if the guess is incorrect', () => {
    expect(round.takeTurn('array')).to.equal('incorrect!')
  })
});
