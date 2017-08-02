function ItunesService() {

  this.getMusicByArtist = function (artist) {

    //allows requests to localhost: 8080 otherwise blocked by itunes
    var url = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'https://itunes.apple.com/search?term=' + artist;
    var apiUrl = url + encodeURIComponent(url2);

    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');

    //modifies the objects to reduce the excess data
    return $.getJSON(apiUrl).then(function (response) {

      //make a new array that will hold the items that are not videos
      var filteredList = [];
      //loop through the API results and push only the songs to the new array
      response.results.forEach(function(item) {
          if(item.kind == 'song'){
            filteredList.push(item);
          }
        });

      //map the filtered list to the output variable
      var songList = filteredList.map(function (song) {

          return {
            title: song.trackName,
            albumArt: song.artworkUrl60,
            artist: song.artistName,
            collection: song.collectionName,
            price: song.collectionPrice,
            preview: song.previewUrl
          };
      })
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
      return songList;
    })
  }
}