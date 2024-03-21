"use strict";
/**
 * this JS file illustrates how to use JS code to control the A/V operations
 * */
//add video
let video = document.createElement("video");
let source = document.createElement("source");
source.src = "bird.mp4";
source.type = "video/mp4";
video.appendChild(source);
document.querySelector("main section").appendChild(video);

//add Audio
let audio = document.createElement("audio");
source = document.createElement("source");
source.src = "cheering.mp3";
source.type = "audio/mpeg";
audio.appendChild(source);
document.querySelector("main section").appendChild(audio);

//event handlers
let btnvideo = document.getElementById("video");
// incorrect invocation runtime error
btnvideo.addEventListener("click", function () { video.play(); });

// btnvideo.addEventListener("click", playStopVideo);
function playStopVideo(e) {

  document.querySelector("video").play();
  // modify this code so that the button can stop the video as well 

}
let btnaudio = document.getElementById("audio");
btnaudio.addEventListener("click", playAudio);
function playAudio(e) {

  document.querySelector("audio").play();
  // modify this code so that the button can stop the audio as well

}