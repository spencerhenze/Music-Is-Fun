function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  function clearSongs() {
    var nothing = '';
    document.getElementById('song-titles').innerHTML = nothing;
  }

  this.aud_play_pause = function aud_play_pause(audioId, iconId) {

    var myAudio = document.getElementById(audioId);
    if (myAudio.paused) {
      $(`#${iconId}`).removeClass('fa fa-play');
      $(`#${iconId}`).addClass('fa fa-pause');
      myAudio.play();
    }
    else {
      $(`#${iconId}`).removeClass('fa fa-pause');
      $(`#${iconId}`).addClass('fa fa-play');
      myAudio.pause();
    }
  }

  function drawSongs(songs) {
    var counter = 0

    if (counter != 0) {
      clearSongs();
    }

    var template = '';
    var i = 0;

    songs.forEach(function (song) {

      var id = 'song' + i;
      var iconId = 'stateicon' + i;
      template += `
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div class="thumbnail card-wrapper">
              <h3 class="center-text">${song.artist}</h3>
              <img class="album-artwork" src="${song.albumArt}" alt="art">
              <div class="info">
                  <a href="javascript:void(0)" data-toggle="tooltip" title="Preview" onclick="app.controllers.itunesCtrl.aud_play_pause('${id}', '${iconId}')"><i id="${iconId}" class="fa fa-play play-pause-button"></i>
                  <h5><strong>Title:</strong> ${song.title}</h5></a>
                  <h5><strong>Album:</strong> ${song.collection}</h5>
                  <h5><strong>Price:</strong> ${song.price}</h5>
                  <audio id=${id} src="${song.preview}" type="audio/mpeg"></audio>
              </div>
          </div>
      </div>
      `
      i++;
    });


    document.getElementById('song-tiles').innerHTML = template;

    counter++;

  }





}