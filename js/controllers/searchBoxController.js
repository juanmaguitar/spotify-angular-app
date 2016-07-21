angular.module("mySpotifyAppControllers")
	.controller("searchBox", function($rootScope, $scope, spotifyService ) {

		$scope.submit = function() {
			$rootScope.$broadcast('evSearchArtist', $scope.searchValue);
		}

	})