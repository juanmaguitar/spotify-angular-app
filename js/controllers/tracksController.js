angular.module("mySpotifyAppControllers")
	.controller("tracksController", function($scope, spotifyService ) {

		$scope.$on('tracksAdded', function () {
			$scope.tracks = spotifyService.getTracks();
    });

	})