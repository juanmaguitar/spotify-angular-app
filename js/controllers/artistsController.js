angular.module("mySpotifyAppControllers")
	.controller('artistsController', function( $rootScope, $scope, spotifyService ) {

		$scope.$on('evSearchArtist', function (event, searchValue) {
			spotifyService.getArtists(searchValue)
				.then(function( dataFromApi ) {
					$scope.artists = dataFromApi.data.artists.items;
				})

		});

		$scope.artistSelected = function() {
			$rootScope.$broadcast('evArtistSelected', $scope.artist);
		}

	})