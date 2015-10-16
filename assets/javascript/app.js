angular.module('MainCtrl', []).controller('MainController', function($scope) {

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

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

	$locationProvider.html5Mode(true);

}]);

angular.module('myApp', ['ngRoute', 'appRoutes', 'ui.bootstrap', 'MainCtrl']);