angular.module("mySpotifyAppControllers",[ 'mySpotifyAppServices' ])
	.controller("mainAppController", function($rootScope, $scope, spotifyService ) {

		$scope.submit = function() {
			spotifyService.getArtists( $scope.searchValue )
				.then(function( dataFromApi ) {
					$scope.artists = dataFromApi.data.artists.items;
				})
		}

	})