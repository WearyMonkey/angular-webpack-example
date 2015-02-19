exports.module = angular.module("app").directive("simpleDirective", function(){
  return {
    restrict: "E",
    templateUrl: "app/templates/template.html"
  };
});
