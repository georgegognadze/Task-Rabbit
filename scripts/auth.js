'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebase) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {

		login: function(user) {
			return auth.$authWithPassword(
				{email: user.email, password: user.password}
			);
		},
		register: function(user) {
			return auth.$createUser({email: user.email, password: user.password})
			.then(function() {
				return Auth.login(user);
			});
		}
	};

	return Auth;

});