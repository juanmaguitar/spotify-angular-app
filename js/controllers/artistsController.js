angular.module("mySpotifyAppControllers")
	.controller('artistsController', function( $rootScope, $scope, spotifyService ) {

		$scope.artistSelected = function() {
			spotifyService.getAlbums( $scope.artist )
				.then(function( dataFromApi ) {
					$rootScope.albums = dataFromApi.data.items;
				})
		}

	})