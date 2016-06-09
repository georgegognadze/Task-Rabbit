'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebase) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {

		login: function(user) {
			return auth.$authWithPassword(
				{email: user.email, password: user.password}
			);
		}
	};

	return Auth;

});