angular.module("mySpotifyAppControllers")
	.controller('albumsController', function($rootScope, $scope, spotifyService ) {

			$scope.albumSelected = function() {
				spotifyService.getTracks($scope.album)
					.then(function( dataFromApi ) {
						$scope.$parent.$parent.tracks = dataFromApi.data.items;
					})
			}

		})