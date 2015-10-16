myApp.service('Album', ['$resource', '$http', '$log', function ($resource, $http, $log) {
	
	return $resource('http://45.55.47.19/album-rest/:id', {
      	id: '@_id'
    }, {
    	update: {
      	method: 'PUT'
    	},
    	query: {
        isArray: false
	    },
    });

}]);