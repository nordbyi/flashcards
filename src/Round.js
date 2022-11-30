const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn() {
    this.turns++
  }
}

module.exports = Round;
