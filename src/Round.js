const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now()
    this.endTime
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    const turn = new Turn(guess, this.currentCard)
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.currentCard = this.deck.cards[this.turns]
    return turn.giveFeedback()
  }

  calculatePercentageCorrect() {
    return (((this.incorrectGuesses.length / this.turns - 1) * -1) * 100).toFixed() * 1
  }

  endRound() {
    this.endTime = Date.now()
    const roundMessage = `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
    console.log(roundMessage)
    console.log(`You completed the game in ${this.endTime - this.startTime} milliseconds`)
    return roundMessage
  }

}

module.exports = Round;
