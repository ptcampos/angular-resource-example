myApp.controller('AlbumCtrl', ['$scope', 'Album', function ($scope, Album) {

	$scope.albums = Album.query();

}]);

myApp.controller('ViewCtrl', ['$scope', '$routeParams' , 'Album', function ($scope, $routeParams, Album) {

	$scope.album = Album.get({ id : $routeParams.albumId });
	
}]);

myApp.controller('AddCtrl', ['$scope', '$log', 'Album', '$location', function ($scope, $log, Album, $location) {

	$scope.saveNewAlbum = function(){

		var album = new Album({
			title: $scope.title,
			artist: $scope.artist
		});

		// Redirect after save
		album.$save(function (response) {

			$location.path('#/albums/' + response.id);

			// Clear form fields
			$scope.title = '';
			$scope.artist = '';

		}, function (errorResponse) {
			$log.error(errorResponse);
		});

	};
	
}]);