var logo = require('../images/angular.jpg');

exports.module = angular.module("app").controller('simpleCtrl', function(){
  this.message = 'Hello World';
  this.someImage = logo;
});
