'use strict';

app.factory('Comment', function(FURL, $firebase) {

	var ref = new Firebase(FURL);

	var Comment = {
		comments: function(taskId) {
			return $firebase(ref.child('comments').child(taskId)).$asArray();
		},

		addComment: function(taskId, comment) {
			
		}
	};

	return Comment;
	
});