angular.module("mySpotifyAppControllers")
	.controller("searchController", function($scope, spotifyService ) {

		$scope.submit = function() {
			spotifyService.searchArtists( $scope.searchValue )
		}

	})