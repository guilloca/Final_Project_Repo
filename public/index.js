/*
   *** Songs.GG ***
   *** CS 290 Final Project ***
 */
var allLinks = [];


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var playState = true;
function onYouTubePlayerAPIReady() {
    player = new YT.Player(document.getElementById('ytplayer'), {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady

        }
    });
}

function onPlayerReady(event) {

    // bind events
    var pausePlay = document.getElementById("pausePlay");
    pausePlay.addEventListener("click", function () {
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