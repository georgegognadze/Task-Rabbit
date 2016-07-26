'use strict';

app.controller('TaskController', function($scope, $location, toaster, Task, Auth) {

	$scope.createTask = function() {	
		$scope.task.status = 'open';
		$scope.task.gravatar = Auth.user.profile.gravatar;
		$scope.task.name = Auth.user.profile.name;
		$scope.task.poster = Auth.user.uid;
	};
});