const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require("./Round");
const Deck = require("./Deck");
const Card = require("./Card");

class Game {
  constructor() {
    this.currentRound
  }

  start(){
    this.createRound()
    this.printMessage(this.currentRound.deck)
    this.printQuestion(this.currentRound)
  }

  createCards() {
    return data.prototypeData.map(el => new Card(el.id, el.question, el.answers, el.correctAnswer))
  }

  createDeck() {
    return new Deck(this.createCards())
  }

  createRound() {
    this.currentRound = new Round(this.createDeck())
    return this.currentRound
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