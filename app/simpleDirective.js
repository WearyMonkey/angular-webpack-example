require('./templates/template.html');

exports.module = angular.module("app").directive("simpleDirective", function(){
  return {
    restrict: "E",
    templateUrl: "templates/template.html"
  };
});
