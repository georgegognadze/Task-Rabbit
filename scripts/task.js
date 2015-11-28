'use strict';

app.controller('TaskController', function($scope, FURL, $firebase, $location) {
	
	var ref = new Firebase(FURL);
	var fbTasks = $firebase(ref.child('tasks')).$asArray();

	$scope.tasks = fbTasks;

	$scope.postTask = function(task) {
		fbTasks.$add(task);
		$location.path('/browse');
	}
});