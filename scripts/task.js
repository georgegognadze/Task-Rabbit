'use strict'

app.controller('TaskController', function($scope, FURL, $firebase) {

	$scope.postTask = function(task) {
		console.log(task);
	}
});