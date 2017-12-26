var fd = "";
var app = angular.module('myApp', []);
	 app.config(['$locationProvider', function($locationProvider) {  
         // $locationProvider.html5Mode(true);  
         $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        }]);
	app.controller('myCtrl', function($scope,$location,$http,$timeout) {
		$scope.format = null;
		$scope.date = null;
		$scope.fDate = null;
		$scope.formatDate = function() {
			var d = new Date();
			$scope.fDate = LMath.log($scope.format,$scope.date);
		}
	});