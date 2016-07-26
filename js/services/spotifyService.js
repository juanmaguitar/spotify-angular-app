angular.module("mySpotifyAppServices")
	.factory('spotifyService', function ($http, $rootScope) {

		var urlSearch = 'https://api.spotify.com/v1/search?type=artist&query=<VALUE>'
		var urlAlbums = 'https://api.spotify.com/v1/artists/<ID-ARTIST>/albums'
		var urlTracks = 'https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks'

		var _searchArtist = "";
		var _currentArtistId = "";
		var _currentAlbumId = "";

		var _artists = {}
		var _albums = {}
		var _tracks = {}

		/* Artists */

		function getArtists() {
			return _artists[_searchArtist];
		}

		function searchArtists (artistToSearch) {

			var url  = urlSearch.replace('<VALUE>', artistToSearch)
			_searchArtist = artistToSearch;

			if ( !_artists[artistToSearch] ) {
				$http.get(url)
					.then(function(dataApi) {
						_artists[artistToSearch] = dataApi.data.artists.items;
						$rootScope.$broadcast('artistsAdded')
					})
			}

		}

		$rootScope.$on('artistsAdded', function() {
				_albums = {};
				_currentArtistId = ""
				$rootScope.$broadcast('albumsAdded');
		})

		/* Albums */

		function getAlbums() {
			return _albums[_currentArtistId];
		}

		function searchAlbums (idArtist) {

			var url  = urlAlbums.replace('<ID-ARTIST>', idArtist)
			_currentArtistId = idArtist;

			if ( !_albums[idArtist] ) {
				$http.get(url)
					.then(function(dataApi) {
						_albums[idArtist] = dataApi.data.items;
						$rootScope.$broadcast('albumsAdded')
					})
			}

		}

		$rootScope.$on('albumsAdded', function() {
				_tracks = {};
				_currentAlbumId = ""
				$rootScope.$broadcast('tracksAdded');
		})


		/* Tracks */

		function getTracks() {
			return _tracks[_currentAlbumId];
		}

		function searchTracks ( idAlbum ) {
			var url  = urlTracks.replace('<ID-ALBUM>', idAlbum)
			_currentAlbumId = idAlbum;

			if ( !_tracks[idAlbum] ) {
				$http.get(url)
					.then(function(dataApi) {
						_tracks[idAlbum] = dataApi.data.items;
						$rootScope.$broadcast('tracksAdded')
					})
			}

		}

		return {
			searchArtists : searchArtists,
			getArtists : getArtists,

			searchAlbums : searchAlbums,
			getAlbums : getAlbums,

			searchTracks: searchTracks,
			getTracks : getTracks
		}
	})