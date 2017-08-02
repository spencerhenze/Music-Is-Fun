function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  // var isPlaying = false;

  // function setFlag(){
  //   if(isPlaying == true){
  //     isPlaying = false
  //     return isPlaying;
  //   }
  //   isPlaying = true
  // }
  function clearSongs(){
    var nothing = '';
    document.getElementById('song-titles').innerHTML = nothing;
  }

  function drawSongs(songs) {
    var counter = 0

    if(counter != 0){
      clearSongs();
    }

    var template = '';

    songs.forEach(function (song) {
      template += `
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div class="thumbnail card-wrapper">
              <h3 class="center-text">${song.artist}</h3>
              <img class="album-artwork" src="${song.albumArt}" alt="art">
              <div class="info">
                  <h5><strong>Title:</strong> ${song.title}</h5>
                  <h5><strong>Album:</strong> ${song.collection}</h5>
                  <h5><strong>Price:</strong> ${song.price}</h5>
                  <audio controls onclick="setFlag()">
                      <source src="${song.preview}" type="audio/mpeg">
                  </audio>
              </div>
          </div>
      </div>
      `
    });


    document.getElementById('song-tiles').innerHTML = template;

    counter++;

  }





}