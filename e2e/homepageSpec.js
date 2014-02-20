var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe("Homepage", function () {
  it("should display the correct title", function () {
    browser.get('/#');
    expect(browser.getTitle()).to.eventually.equal('Feed Reader');
  });
});
