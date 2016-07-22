angular.module("mySpotifyAppControllers")
	.controller('artistsController', function( $rootScope, $scope, spotifyService ) {

		$scope.artistSelected = function() {
			spotifyService.getAlbums( $scope.artist )
				.then(function( dataFromApi ) {
					$scope.$parent.$parent.albums = dataFromApi.data.items;
				})
		}

	})