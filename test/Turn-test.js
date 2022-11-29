const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card")

describe('Turn', function () {
  let turn
  let card

  beforeEach(function () {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = newTurn('sea otter', card)
  })

  it('Should be a function', () => {
    expect(turn).to.be.a('function')
  })

  it('Should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('Should accept a guess as an argument', () => {
    expect(turn.userGuess).to.equal('____')
  })

  it('Should accept an instance of Card as an argument as well', () => {
    expect(turn.card).to.be.an.instanceof(Card)
  })
})