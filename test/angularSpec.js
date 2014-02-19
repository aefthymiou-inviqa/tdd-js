describe('Angular unit tests', function () {

  var should = chai.should();
  var element;

  beforeEach(function () {
    element = angular.element('<div>{{2 + 2}}</div>');
  });

  it('should return 4', function (done) {
    element.html().should.equal('4');
  });
});
