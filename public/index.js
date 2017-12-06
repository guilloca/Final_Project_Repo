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
var rand = document.getElementById('player').dataset.rand;
var listID = document.getElementById('player').dataset.playlistid;
if (!listID) {
    console.log("Error: ListID is empty");
} else {
    console.log("PLAYLIST_ID: " + listID + " @index:" + rand);
}
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: '200',
        width: '100%',
        playerVars: {
            listType: 'playlist',
            list: listID,
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            controls: 0,
            enablejsapi: 1,
            index: rand,
            loop: 1
        },
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady,
            // when player changes
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

    // player initializers
    player.setVolume(DEFAULT_VOLUME);
    player.setLoop(true);
    player.playVideo();
    player.setShuffle(true);
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
}

function insertNewLink(title, photoURL) {
  var context = {
    title: title,
    photoURL: photoURL
  }

  var navBarLinks = document.getElementById('navBar');
  var html = Handlebars.templates['linkTemplate'](context);
  navBarLinks.innerHTML += html;
};