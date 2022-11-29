const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card")

const testData = [{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 2,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}]

describe('Deck', function () {
  let deck
  let card

  beforeEach(function () {
    deck = new Deck(testData.map(el => new Card(el.id, el.question, el.answers, el.correctAnswer)))
    card = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer)
  })

  it('Should be a function', () => {
    expect(Deck).to.be.a("function");
  })

  it('Should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('Should be initialized with a deck of Card(s)', () => {
    expect(deck.cards.length).to.equal(3)
    expect(deck.cards[0]).to.deep.equal(card)
  })
})
