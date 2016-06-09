'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebase) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

});