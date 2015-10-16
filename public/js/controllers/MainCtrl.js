angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';	
  $scope.open = function($event) {
    $scope.status[$event].opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.format = 'dd-MMMM-yyyy'

  $scope.status = [
  {
    opened: false
  },
  {
    opened: false
  }
  ];

});
