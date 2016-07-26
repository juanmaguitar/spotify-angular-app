angular.module("mySpotifyAppControllers")
	.controller('albumsController', function($scope, spotifyService ) {

		$scope.$on('albumsAdded', function () {
			$scope.albums = spotifyService.getAlbums();
    });

		$scope.$watch("album", function(newValueAlbum, oldValue) {
			if (newValueAlbum) {
				spotifyService.searchTracks( newValueAlbum )
			}
		})

	})