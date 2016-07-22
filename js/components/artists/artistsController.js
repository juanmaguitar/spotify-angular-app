angular.module("mySpotifyAppComponents")
	.controller('artistsController', function( $rootScope, spotifyService ) {

		this.artistSelected = function() {
			console.log ("selected!");
			spotifyService.getAlbums( this.artist )
				.then(function( dataFromApi ) {
					$rootScope.albums = dataFromApi.data.items;
					console.log ($rootScope.albums);
				})
		}

	})