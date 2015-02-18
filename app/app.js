var angular = require('angular');
var logo = require('../images/angular.jpg');
require('../styles/base.scss');

angular.module('app', [])
  .controller('simpleCtrl', function($scope) {
    $scope.message = 'Hello World';
    $scope.someImage = logo;
  });