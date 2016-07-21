angular.module("mySpotifyAppControllers")
	.controller('albumsController', function($rootScope, $scope, spotifyService ) {

			$scope.$on('evArtistSelected', function (event, idArtist) {
				spotifyService.getAlbums(idArtist)
					.then(function( dataFromApi ) {
						$scope.albums = dataFromApi.data.items;
					})
			});

			$scope.albumSelected = function() {
				$rootScope.$broadcast('evAlbumSelected', $scope.album);
			}

		})