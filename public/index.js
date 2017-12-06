/*
   *** Songs.GG ***
   *** CS 290 Final Project ***
 */
const DEFAULT_VOLUME = 6;
var allLinks = [];

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playState = true;
function onYouTubePlayerAPIReady() {
    var listID = document.getElementById('player').dataset.playlistid;
    if (!listID) {
        console.log("Error: ListID is empty");
    } else {
        console.log("PLAYLIST_ID: " + listID);
    }
    player = new YT.Player('player', {
        height: '200',
        width: '100%',
        playerVars: {
            listType: 'playlist',
            list: listID,
            autoplay: 1,
            controls: 0
        },
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange

        }
    });
}
function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.ENDED) {
        player.nextVideo();
        console.log("Video ended: playing next song! " + player.getPlaylistIndex());
    }
}
function onPlayerReady(event) {
    player.loadPlaylist(listID);
    // player initializers
    player.setVolume(DEFAULT_VOLUME);
    player.setLoop(true);
    player.setShuffle(true);
    player.playVideo();

    // pause play button
    var pausePlay = document.getElementById("pausePlay");
    pausePlay.addEventListener('click', function () {
        if (playState) {
            player.pauseVideo();
            playState = false;
            console.log("player paused!");
        } else {
            player.playVideo();
            playState = true;
            console.log("player played!");
        }
    });

    // skip song button
    var skipButton = document.getElementById("skipButt");
    skipButton.addEventListener('click', function () {
        player.nextVideo();
        console.log("Song skipped!");
    });

    // prev song button
    var prevButton = document.getElementById("backButt");
    prevButton.addEventListener('click', function () {
        player.previousVideo();
        console.log("Song went back!");
    });

    // grab playlist ID // currently unused
    var listID = document.getElementById('player').dataset.playlistid;
    if (!listID) {
        console.log("Error: ListID is empty");
    } else {
        console.log("PLAYLIST_ID: " + listID);
    }
}

/* **** Shiz that won't work for no good reason ****
var listID = document.getElementById('player-content').playlistid;
if (!listID) {
    console.log("Error: ListID is empty");
}
console.log("JS Loaded w/ ListID: ") + String(listID);
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '300',
        width: '300',
        playerVars: {
            listType: 'playlist',
            list: listID
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }

    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
*/
function insertNewLink(title, photoURL) {
  var context = {
    title: title,
    photoURL: photoURL
  }

  var navBarLinks = document.getElementById('navBar');
  var html = Handlebars.templates['linkTemplate'](context);
  navBarLinks.innerHTML += html;
};