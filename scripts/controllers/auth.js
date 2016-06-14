'user strict';

app.controller('AuthController', function($scope, $location, Auth) {
	$scope.register = function(user) {
		Auth.register(user).then(function() {
			console.log("Register successfully!");
			$location.path('/');
		}, function(err) {
			console.log("Error...");
		}); 
	}
});