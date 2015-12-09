var Auth = {

	user: {},

	login: function(user) {
		return Auth.$AuthWithPassword(
			{email: user.email, password: user.password})
	};
},
	register: function(user) {
		return Auth.$createUser(
			{email: user.email, password: user.password})
		.then(function()) {
			return Auth.login(user);
	});
},
	logout: function() {
		Auth.$unauth();
	},

	changePassword: function(user) {
		return Auth.$changePassword({email: user.email, oldPassword: user.oldpass, newPassword: user.newpass});
},
	signedIn: function() {
		return !!Auth.user.provider;
	}
};

	Auth.$onAuth(function(authData)) {
		if(authData) {
			angular.copy(authData, Auth.user);
		} else {
			angular.copy({}, Auth.user);
		}
	});

	return Auth;

});