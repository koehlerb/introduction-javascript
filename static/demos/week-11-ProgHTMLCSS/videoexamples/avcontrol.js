"use strict";
/**
 * this JS file illustrates how to use JS code to control the A/V operations
 * */
//add video
let video = document.createElement("video");
let source = document.createElement("source");
source.src = "cp_dance.mp4";
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
btnvideo.addEventListener("click", video.play());
/*
btnvideo.addEventListener("click", playStopVideo);
function playStopVideo(e) {
  if (e.target.textContent === "Play Video") {
    document.querySelector("video").play();
    e.target.textContent = "Stop Video";
  } else {
    document.querySelector("video").pause();
    e.target.textContent = "Play Video";
  }
}
let btnaudio = document.getElementById("audio");
btnaudio.addEventListener("click", playAudio);
function playAudio(e) {
  if (e.target.textContent === "Play Audio") {
    document.querySelector("audio").play();
    e.target.textContent = "Stop Audio";
  } else {
    document.querySelector("audio").pause();
    e.target.textContent = "Play Audio";
  }
}
*/