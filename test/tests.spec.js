var expect = require("chai").expect;
expect(1).to.be.a("number");
const { getYear, dataFormat } = require("../helpers/helper_functions.js");

// getYear function 
describe("getYear", () => {
  it("Returns the expected year", () => {
    expect(getYear("Wed Jan 25 2017 16:00:00 GMT-0800")).to.be.equal(2017)
  });
});


