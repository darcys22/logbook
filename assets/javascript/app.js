angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';	

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

angular.module('myApp', ['ngRoute', 'appRoutes', 'MainCtrl']);