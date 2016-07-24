'use strict';

app.factory('Task', function(FURL, $firebase, Auth) {

	var ref = new Firebase(FURL);
	var tasks = $firebase(ref.child('task')).$asArray();
	var user = Auth.user;


	var Task = {
		all: tasks,

		getTask: function(taskId) {
			return $firebase(ref.child('tasks').child(taskId));
		},

		createTask: function(task) {
			task.datetime = Firebase.ServerValue.TIMESTAMP;
			return tasks.$add(task);
		},
		
	};


});