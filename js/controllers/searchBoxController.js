angular.module("mySpotifyAppControllers")
	.controller("searchBox", function($rootScope, $scope, spotifyService ) {
		$scope.submit = function() {
			console.log( $scope.searchValue )
			$rootScope.$broadcast('evSearchArtist', $scope.searchValue);
		}
	})