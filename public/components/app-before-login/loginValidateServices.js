'use strict';

/*
Singletons serivice Each component dependent on a service gets a reference to the 
single instance generated by the service factory
	factory services
 */

angular.module('intranet')
.factory('loginValidate', ['services', "$location",'$q', function (services, $location, $q) {
	return {
		checkStatus: function () {
			return $q( (resolve, reject) => {
					if(services.getSession()){

						let session = services.getSession().user;
						if(session){
							console.log("login");
							 $location.path('/'); 
							
						}else{
							console.log("not login");
							 $location.path('/login'); 
						}
					}

				});
		}
	};
}]);