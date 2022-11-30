const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
const Card = require("../src/Card");
const data = require("../src/data");
const Game = require("../src/Game");

describe("Game", function () {
  let round;
  let round2;
  let deck;
  let turn;
  let game;

  beforeEach(function () {
    deck = new Deck(
      data.prototypeData
        .slice(0, 3)
        .map((el) => new Card(el.id, el.question, el.answers, el.correctAnswer))
    );
    round = new Round(deck);
    round2 = new Round(deck);
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
});
