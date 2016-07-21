angular.module("mySpotifyAppControllers")
	.controller('tracksController', function($rootScope, $scope, spotifyService ) {
		$scope.$on('evAlbumSelected', function (event, idAlbum) {
			spotifyService.getTracks(idAlbum)
				.then(function( dataFromApi ) {
					$scope.tracks = dataFromApi.data.items;
					console.log ( $scope.tracks );
				})
		});

	})