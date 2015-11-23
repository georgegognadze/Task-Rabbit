'use strict';

app.controller('TaskController', function($scope) {
	$scope.postTask = function(task) {
		console.log(task);
	}
});