const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require("./Round");
const Deck = require("./Deck");
const Turn = require("./Turn")
const Card = require("./Card");

class Game {
  constructor() {
    this.currentRound
  }

  createCards() {
    return data.prototypeData.map(el => new Card(el.id, el.question, el.answers, el.correctAnswer))
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;