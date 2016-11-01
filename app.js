(function () {
'use strict';

angular.module('demoApp', [])
.controller('demoController', function ($scope) {
$scope.name = "babu";
$scope.result = "";

$scope.displayResult = function() {
  $scope.result = $scope.name + " " + $scope.name;
};

});

})();
