angular.module("mySpotifyAppComponents")
	.controller('albumsController', function($rootScope, spotifyService ) {

			this.albumSelected = function() {
				spotifyService.getTracks(this.album)
					.then(function( dataFromApi ) {
						$rootScope.tracks = dataFromApi.data.items;
					})
			}

	})