'use strict';

app.factory('Task', function(FURL, $firebase, Auth) {

	var ref = new Firebase(FURL);
	var tasks = $firebase(ref.child('task')).$asArray();
	var user = Auth.user;

}