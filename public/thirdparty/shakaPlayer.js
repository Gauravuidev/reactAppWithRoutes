//checker for Android and iOS

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
  }

  var DeviceChecker = getMobileOperatingSystem();



var manifestUri = [
    {url:"https://vodhls-vh.akamaihd.net/i/songs/15/2046015/22895140/22895140_64.mp4/master.m3u8?set-akamai-hls-revision=5&hdnts=st=1524055556~exp=1524059156~acl=/i/songs/15/2046015/22895140/22895140_64.mp4/*~hmac=490d847cc2b7faf114c4b810f7688f81a5d4b5feebfa41ce02da1576418b5b4d",active:"yes",title:"kala Tikka"}
   ];

function storageChecker(){
  if ('storage' in navigator && 'estimate' in navigator.storage) {
       navigator.storage.estimate().then(({usage, quota}) => {
    const percentUsed = Math.round(usage / quota * 100);
    const usageInMib = Math.round(usage / (1024 * 1024));
    const quotaInMib = Math.round(quota / (1024 * 1024));
    const details = `${usageInMib} out of ${quotaInMib} MiB used (${percentUsed}%)`;
    console.log(details);
                if(percentUsed < 5){
                       onDownloadClick();
                } else {
                    listContent().then(
                            function (contents) {
                                if(contents.length > 0){
                                    removeContent(contents[0]).then(function () {
                                        onDownloadClick();
                                    });
                                } else{
                                    return;
                                }
                            }
                    )
                }
            }
       );
   }
}
// var countCHeckerIOS = 0;
// function getSongsIOS(title, url, id){
//   var songTitle =title;
//   var Track = url;
//   var ID = id;
//   // document.getElementById('asset-title-input').value = songTitle;
//   // document.getElementById('asset-uri-input').value = Track;
//   // document.getElementById('asset-id').value = id;
//   if(countCHeckerIOS != 0 && countCHeckerIOS !== undefined){
//    window.storage.list().then(function(content){
//    if(content.length > 0) {
//       for(var i =0; i < content.length; i++){
//         if(content[i].appMetadata.id == id){
//         //debugger;
//         // play hona h yaha
//         return;
//         } else {
//           storageChecker();
//           countCHeckerIOS++;
//           return;
//         }
//      }
//    }
//  });
//  } else {
//     storageChecker();
//     countCHeckerIOS++;
//  }
// }
var countCHecker, pauser, running, play=false, pdata={};
function getSongs(title,url,id){ //debugger;
  var songTitle =title;
  var Track = url;
  var id = id;
  if(countCHecker != 0){
  window.storage.list().then(function(content){
  console.log(content);
  if(content.length > 0) {
      for(var i =0; i < content.length; i++){
        if(content[i].appMetadata.id == id){
        //debugger;

        playContent(content[i]);
        }
     }
   } else {
     players.load(Track).then(function(){
        video.play();
        play = true;
        pdata = {
          'title': songTitle
        }
     });
     //storageChecker();
      countCHecker++;
  }
  });
}
}
function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    initPlayer();

    // Everything looks good!

  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }

  // Update the online status and add listeners so that we can visualize
  // our network state to the user.
  updateOnlineStatus();
  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
}

function initPlayer() { //debugger;
  // Create a Player instance.
  var video = document.getElementById('video');
  var players = new shaka.Player(video);
  //video.addEventListener('ended', onEnded);
  video.addEventListener('pause', onPause);
  video.addEventListener('playing', onPlaying);
  //video.addEventListener('click', starter);
  // Attach player to the window to make it easy to access in the JS console.
  window.players = players;

  // Listen for error events.
  players.addEventListener('error', onErrorEvent);

  //configuration for player
  players.configure({
  preferredTextLanguage: 'und',
  preferredAudioLanguage: 'und',
  streaming: {
     bufferBehind: 30,
       bufferingGoal: 10,
       //durationBackoff: 1,
       //failureCallback: Function,
       //ignoreTextStreamFailures: false,
       alwaysStreamText: true,
       //jumpLargeGaps: false,
       //rebufferingGoal: 2,
       //retryParameters: Object,
       smallGapLimit: 0.5,
       //startAtSegmentBoundary: false,
     enableAdaptation: true,
     ShowNative:true
  }
});
  initStorage(players);

  //var downloadButton = document.getElementById('download-button');
  //downloadButton.onclick = onDownloadClick;

  // Update the content list to show what items we initially have
  // stored offline.
  //refreshContentList();

  // Try to load a manifest.
  // This is an asynchronous process.
  //gol = manifestUri;
  //mainWork(gol,"main");
}
// function mainWork(manifestUri,str){
//    if(str == "main"){
//      for(var i =0; i < manifestUri.length; i++) {
//          if(manifestUri[i].active == "yes"){
//          document.getElementById('asset-title-input').value = manifestUri[i].title;
//          document.getElementById('asset-uri-input').value = manifestUri[i].url;
//          player.load(manifestUri[i].url);
//          onDownloadClick();
//        }
//      }
//    }else if(str == "prev"){
//      for(var i =0; i < manifestUri.length; i++) {
//          if(manifestUri[i].active == "yes"){
//          if(i !== 0){
//          prev = --i;
//          } else {
//          prev = manifestUri.length - 1;
//          }
//            manifestUri[i].active = "no";
//            manifestUri[prev].active = "yes";
//            document.getElementById('asset-title-input').value = manifestUri[prev].title;
//            document.getElementById('asset-uri-input').value = manifestUri[prev].url;
//            player.load(manifestUri[prev].url);
//            onDownloadClick();
//            return;
//        }
//      }
//    }else{
//      for(var i =0; i < manifestUri.length; i++) {
//          if(manifestUri[i].active == "yes"){
//          if(i !== manifestUri.length - 1){
//          next = ++i;
//          } else {
//          next = 0;
//          }
//            manifestUri[i].active = "no";
//            manifestUri[next].active = "yes";
//            document.getElementById('asset-title-input').value = manifestUri[next].title;
//            document.getElementById('asset-uri-input').value = manifestUri[next].url;
//            player.load(manifestUri[next].url);
//            onDownloadClick();
//            return;
//        }
//      }
//    }
// }
// function prevs(){
//  mainWork(manifestUri,"prev");
// }
// function nexts(){
//  mainWork(manifestUri,"next");
// }
function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

// function onEnded() { //alert("shaka next");
//   gaanaPlayer.next();
//   alert("nextbutton");
// }

function onPause() {
  pauser = true;
  running = false;
}
function onPlaying() {
  pauser = false;
  running = true;
}
/*
 * Update the online status box at the top of the page to tell the
 * user whether or not they have an internet connection.
 */

function selectTracks(tracks) {
  // Store the highest bandwidth variant.
  var found = tracks
      .filter(function(track) { return track.type == 'variant'; })
      .sort(function(a, b) { return a.bandwidth > b.bandwidth; })
      .pop();
  console.log('Offline Track: ' + found);
  return [ found ];
}
var Dkaro;
function initStorage(players) {
  //Dkaro = true;
  AOS = [];
  // Create a storage instance and configure it with optional
  // callbacks. Set the progress callback so that we visualize
  // download progress and override the track selection callback.
  window.storage = new shaka.offline.Storage(players);
  window.storage.configure({
    progressCallback: setDownloadProgress,
    trackSelectionCallback: selectTracks
  });
}

function listContent() {
  return window.storage.list();
}
function playOfflineIOS(id, toplay){
   window.storage.list().then(function(content){
  console.log(content);
  if(content.length > 0) {
      for(var i =0; i < content.length; i++){
        if(content[i].appMetadata.id == id){
        return content[i].offlineUri;
        }
      }
    }
  });
}
function playOffline(id,toplay) {
  if($('#trackrow'+id).hasClass('currentRunning') || $('.player-lt').hasClass('runningMain'+id)){
     video.pause();
     $("#playpause,#playpause1").removeClass('pause');
     $('.player-lt').removeClass('runningMain'+id);
     $('#trackrow'+id).removeClass('currentRunning').addClass('halt');
   } else if($('#trackrow'+id).hasClass('halt')){
    video.play();
    $("#playpause,#playpause1").addClass('pause').removeClass('loadingPlay');
    $('.player-lt').addClass('runningMain'+id);
    $('#trackrow'+id).removeClass('halt').addClass('currentRunning');
   }else{
  window.storage.list().then(function(content){
  console.log(content);
  if(content.length > 0) {
      for(var i =0; i < content.length; i++){
        if(content[i].appMetadata.id == id){
        playContent(content[i]);
        equa =  true;
       // $(".network_error").hide().children('p').text("This songs is not available offline");
       $('.artworkload').removeClass('currentRunning currentsong halt');
        $('#trackrow'+id).addClass('currentRunning currentsong');
         $('.player-lt').removeClass().addClass('player-lt clearfix');
        $('.player-lt').addClass('runningMain'+id);
        $("#playpause, #playpause1").addClass('pause').removeClass('loadingPlay');
        gaanaPlayer.play(id,true,toplay);
       // $('#stitle').text($('#trackrow'+id+' li .playlist-data .playlist_thumb_det a').text());
       // $('#atitle').text($('#trackrow'+id+' li .playlist-data .playlist_thumb_det .mobile a').text())
        return;
        }
     }
     equa = false;
     alert("This songs is not available offline");

    // $("img#qsong"+id).show();
    // $(".play-song").removeClass("loadingPlay pause").addClass("play");
    // $(".network_error").show().children('p').text("This songs is not available offline");
  } else{
    equa = false;
       alert("No data in your offline storage");
  }
  });
}
}
function playContent(content) {
  players.load(content.offlineUri);
}
function removeSongsDB(item){
  window.storage.list().then(function(content){
    if(content.length > 0) {
        for(var i =0; i < content.length; i++){
          if(content[i].appMetadata.id == item.id){
            removeContent(content[i]);
          }
        }
      } else{
        return;
      }
    });
}
function removeContent(content) {
  console.log(content);
  return window.storage.remove(content.offlineUri);
}

function downloadContent(manifestUri, title,id) { //debugger;
  // Construct a metadata object to be stored along side the content.
  // This can hold any information the app wants to be stored with the
  // content.
  id = id;
  var metadata = {
    'title': title,
    'id' : id,
    'downloaded': Date()
  };
    // if(Dkaro == true){
    //   Dkaro = false;
       return window.storage.store(manifestUri, metadata).then(function(){
         if(AOS !== undefined && AOS.length != 0){
         // while(AOS.length){
         downloadContent(AOS[0].manifestUri, AOS[0].metadata.title, AOS[0].metadata.id);
             AOS.shift();
              // }
          } else{
            return;
          }
       });
    //     alert('download song');
    //     Dkaro = true;
    //      if(AOS.length != 0 && AOS !== undefined){
    //       if(Dkaro == true){
    //         for(var i=0; i < AOS.length; i++){
    //         return window.storage.store(AOS[i].manifestUri, AOS[i].metadata).then(function(){
    //           AOS.shift();
    //           alert('download song from array');
    //         });
    //         }
    //       }
    //     }
    // });
    // } else{
    //    AOS.push({'manifestUri':manifestUri,'metadata':metadata});
    //    Dkaro = true;
    // }

}

/*
 * UI callback for when the download button is clicked. This will
 * disable the button while the download is in progress, start the
 * download, and refresh the content list once the download is
 * complete.
 */
function onDownloadClick() { //debugger;
  //var downloadButton = document.getElementById('download-button');
  var manifestUri = document.getElementById('asset-uri-input').value;
  var title = document.getElementById('asset-title-input').value;
  var id = document.getElementById('asset-id').value;

  // Disable the download button to prevent user from requesting
  // another download until this download is complete.
  // downloadButton.disabled = true;

  setDownloadProgress(null, 0);

  // Download the content and then re-enable the download button so
  // that more content can be downloaded.
  downloadContent(manifestUri, title,id)
    .then(function(){
      removeSongRecursive();
    })
    .catch(function(error) {
      // In the case of an error, re-enable the download button so
      // that the user can try to download another item.
      //downloadButton.disabled = false;
      //add in array
      var metadata = {'title': title,'id' : id,'downloaded': Date()}
      AOS.push({'manifestUri':manifestUri,'metadata':metadata});
      onError(error);
    });
}

/*
 * Update the online status box at the top of the page to tell the
 * user whether or not they have an internet connection.
 */
function updateOnlineStatus() {
  var signal = document.getElementById('pwa');
  if (navigator.onLine) {
    //signal.innerHTML = 'ONLINE';
    //signal.style.background = 'green';
    console.log('ONLINE');
  } else {
    //signal.innerHTML = 'OFFLINE';
    //signal.style.background = 'grey';
    console.log('OFFLINE');
  }
}

/*
 * Find our progress bar and set the value to show the progress we
 * have made.
 */
function setDownloadProgress(content, progress) {
  var progressBar = document.getElementById('progress-bar');
  progressBar.value = progress * progressBar.max;
}

/*
 * Clear our content table and repopulate it table with the current
 * list of downloaded content.
 */
// function refreshContentList() {
//    var contentTable = document.getElementById('content-table');

// //   // Clear old rows from the table.
//   while (contentTable.rows.length) {
//     contentTable.deleteRow(0);
//   }
//   var addRow = function(content) {
//     var append = -1;

//     var row = contentTable.insertRow(append);
//     row.insertCell(append).innerHTML = content.offlineUri;
//     Object.keys(content.appMetadata)
//         .map(function(key) {
//           return content.appMetadata[key];
//         })
//         .forEach(function(value) {
//           row.insertCell(append).innerHTML = value;
//         });

//     row.insertCell(append).appendChild(createButton(
//         'PLAY',
//         function() { playContent(content,content.appMetadata.id); }));

//     row.insertCell(append).appendChild(createButton(
//         'REMOVE',
//         function() {
//           removeContent(content,content.appMetadata.id)
//               .then(function() { refreshContentList() });
//         }));
//   };

//   return listContent()
//       .then(function(content) {
//     content.forEach(addRow);
//     });
// };

/*
 * Create a new button but do not add it to the DOM. The caller
 * will need to do that.
 */
// function createButton(text, action) {
//   var button = document.createElement('button');
//   button.innerHTML = text;
//   button.onclick = action;
//    return button;
//  }


document.addEventListener('DOMContentLoaded', initApp);


 /* Install all polyfills.
 * @export
 */
shaka.polyfill.installAll = function() {
  for (var i = 0; i < shaka.polyfill.polyfills_.length; ++i) {
    shaka.polyfill.polyfills_[i]();
  }
};
/**
 * Contains the polyfills that will be installed.
 * @private {!Array.<function()>}
 */
shaka.polyfill.polyfills_ = [];
/**
 * Registers a new polyfill to be installed.
 *
 * @param {function()} polyfill
 * @export
 */
shaka.polyfill.register = function(polyfill) {
  shaka.polyfill.polyfills_.push(polyfill);
};

function removeSongRecursive(){
    if ('storage' in navigator && 'estimate' in navigator.storage) {
       navigator.storage.estimate().then(({usage, quota}) => {
    const percentUsed = Math.round(usage / quota * 100);
    const usageInMib = Math.round(usage / (1024 * 1024));
    const quotaInMib = Math.round(quota / (1024 * 1024));
    const details = `${usageInMib} out of ${quotaInMib} MiB used (${percentUsed}%)`;
    console.log(details);
                if(percentUsed <= 5){
                    return;
                } else {
                    listContent().then(
                            function (contents) {
                                if(contents.length > 0){
                                    removeContent(contents[0]).then(function () {
                                        removeSongRecursive();
                                     });
                                } else{
                                    return;
                                }
                            }
                    )
                }
            }
       );
   }
}

function removeShakaDb(){
    if(typeof shaka.offline.Storage != 'undefined'){
        return shaka.offline.Storage.deleteAll();
    }
}
