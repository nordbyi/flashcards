const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Game = require("../src/Game");
const data = require("../src/data");

describe("Game", function () {
  let round;
  let deck;
  let game;

  beforeEach(function () {
    deck = new Deck(
      data.prototypeData
        .slice(0, 3)
        .map((el) => new Card(el.id, el.question, el.answers, el.correctAnswer))
    );
    round = new Round(deck);
    game = new Game();
  });

  it("Should have a currentRound property", () => {
    expect(game.currentRound).to.be.undefined;
  });

  it("Should be able to create Cards", () => {
    expect(game.createCards().slice(0, 3)).to.deep.equal(deck.cards);
  });

  it('Should be able create a Deck from Cards', () => {
    expect(game.createDeck().countCards()).to.equal(30)
  })

  it('Should be able to create a new Round', () => {
    const newRound = game.createRound()
    expect(newRound.deck.cards.slice(0, 3)).to.deep.equal(deck.cards)
    expect(newRound.currentCard).to.deep.equal(deck.cards[0])
    expect(newRound.turns).to.equal(0)
    expect(newRound.incorrectGuesses).to.deep.equal([])
  })

  it('Should update currentRound when a Round is instantiated',() => {
    game.createRound()
    expect(game.currentRound).to.be.an.instanceof(Round)
  })
});
