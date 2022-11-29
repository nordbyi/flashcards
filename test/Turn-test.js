const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", function () {
  let turn;
  let turn2;
  let card;

  beforeEach(function () {
    card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    turn = new Turn("sea otter", card);

    turn2 = new Turn("pug", card);
  });

  it("Should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("Should be an instance of Turn", () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("Should accept a guess as an argument", () => {
    expect(turn.userGuess).to.equal("sea otter");
  });

  it("Should accept an instance of Card as an argument as well", () => {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it("Should be able to return the userGuess", () => {
    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it("Should be able to return the card", () => {
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it("Should be able to indicate if a userGuess equals the correct answer in the card", () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });
});
