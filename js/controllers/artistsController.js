angular.module("mySpotifyAppControllers")
	.controller('artistsController', function( $scope, spotifyService ) {

		$scope.$on('artistsAdded', function () {
			$scope.artists = spotifyService.getArtists();
    });


		$scope.$watch("artist", function(newValueArtist, oldValue) {
			if (newValueArtist) {
				spotifyService.searchAlbums( newValueArtist )
			}
		});

	})