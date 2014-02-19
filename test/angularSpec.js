describe('Angular unit tests', function () {

  var should = chai.should();
  var element;
  var $scope;

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<div>{{2 + 2}}</div>');
    element = $compile(element)($rootScope);
  }));

  it('should return 4', function (done) {
    $scope.$digest();
    element.html().should.equal('4');
    done();
  });
});
