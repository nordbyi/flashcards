const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    const turn = new Turn(guess, this.currentCard)
    console.log(turn)
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      console.log(this.incorrectGuesses[0])
    }
    this.currentCard = this.deck.cards[this.turns]
  }
}

module.exports = Round;
