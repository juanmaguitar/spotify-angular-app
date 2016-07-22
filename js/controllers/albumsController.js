angular.module("mySpotifyAppControllers")
	.controller('albumsController', function($rootScope, $scope, spotifyService ) {

			$scope.albumSelected = function() {
				spotifyService.getTracks($scope.album)
					.then(function( dataFromApi ) {
						$rootScope.tracks = dataFromApi.data.items;
					})
			}

		})