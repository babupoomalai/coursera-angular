(function () {
'use strict';

angular.module('lunchApp', [])
.controller('lunchContainer', function ($scope) {
$scope.result = "";

$scope.checkIfTooMuch = function() {
  var menu = $scope.lunchMenu;

  if(menu == undefined || menu.length == 0) {
    $scope.resultStyle = { color : "red"};
    $scope.result = "Please enter data first"
  } else {
    var menuArray = menu.split(',')
    menuArray = menuArray.filter(Boolean); // Filter empty values
    $scope.resultStyle ={ color : "green"};
    if(menuArray.length <= 3) {
      $scope.result = "Enjoy!";
    } else {
      $scope.result = "Too much!";
    }
  }
};

});

})();
