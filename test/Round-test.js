const chai = require("chai");
const expect = chai.expect;

const Round = require('../src/Round')

describe('Round', function () {
  let round
  
  beforeEach( function () {
    round = new Round()
  })
  
  it("Should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("Should be an instance of Deck", () => {
    expect(round).to.be.an.instanceof(Round);
  });
})