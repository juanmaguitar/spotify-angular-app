angular.module("mySpotifyAppComponents",[ 'mySpotifyAppServices' ])

	.controller("mainAppController", function($rootScope, $scope, spotifyService ) {

		$scope.submit = function() {
			spotifyService.getArtists( $scope.searchValue )
				.then(function( dataFromApi ) {
					$rootScope.artists = dataFromApi.data.artists.items;
				})
		}

	})