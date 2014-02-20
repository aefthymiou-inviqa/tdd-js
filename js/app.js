var app = angular.module('app', []);
app.controller('AppCtrl', ['$scope', 'FeedService', function($scope, FeedService){
  this.title = 'Feed Reader';

  $scope.articles = [];

  $scope.load = function () {
    $scope.articles = FeedService.load();
  };
}]);
