'use strict'

app.controller('TaskController', function($scope, FURL, $firebase) {

	var ref = new Firebase(FURL);
	var fbTasks = $firebase(ref.child('tasks')).$asArray();

	$scope.postTask = function(task) {
		fbTasks.$add(task);
	}
});