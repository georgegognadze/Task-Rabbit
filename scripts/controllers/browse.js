'use strict';

app.controller('BrowseController', function($scope, $routeParams, toaster, Task, Auth, Comment) {

	$scope.searchTask = '';		
	$scope.tasks = Task.all;
	$scope.signedIn = Auth.signedIn;
	$scope.listMode = true;

	$scope.user = Auth.user;

	if($routeParams.taskId) {
		var task = Task.getTask($routeParams.taskId).$asObject();
		$scope.listMode = false;
		setSelectedTask(task);	
	}	

	function setSelectedTask(task) {
		$scope.selectedTask = task;

		//I check isTaskCreator only if user signedIn 
		if($scope.signedIn()) {
			$scope.isTaskCreator = Task.isCreator;
			$scope.isOpen = Task.isOpen;

		}	

		// Get list of comments for the selected task
		$scope.comments = Comment.comments(task.$id);
	};	

	$scope.cancelTask = function(taskId) {
		Task.cancelTask(taskId).then(function() {
			toaster.pop('success', "This task is cancelled successfully.");
		});
	};

	//add addComment function
	$scope.addComment = function() {
		var comment = {
			content: $scope.content,
			name: $scope.user.profile.name,
			gravatar: $scope.user.profile.gravatar
		};

		Comment.addComment($scope.selectedTask.$id, comment).then(function() {				
			$scope.content = '';		
		});	
	};
	
});