describe('Angular Controller Unit Test', function () {

  var should = chai.should();
  var appCtrl;
  var $scope;

  var mockService = {
    load: function () {
      return [
        {
          title: 'Article 1'
        },
        {
          title: 'Article 2'
        }
      ];
    }
  };

  beforeEach(module('app'));
  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    appCtrl = $controller('AppCtrl', { $scope: $scope, FeedService: mockService });
  }));

  it('should have a title of Feed Reader', function () {
    appCtrl.title.should.equal('Feed Reader');
  });

  it('should populate $scope.articles on load()', function () {
    $scope.load();
    $scope.articles.length.should.equal(2);
  });
});
