exports.module = angular.module("app").directive("simpleDirective", function(){
  return {
    restrict: "E",
    template: "<p> my simple directive </p>"
  }
});
