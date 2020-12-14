javascript :(function() {
var YTBsoundBoost=prompt("By how much do you want to multiply the audio compared to initial?","2")//default value - 2

var YTBourVideo = document.querySelector("video");

var YTBaudioCtx = new AudioContext();

var YTBsource = YTBaudioCtx.createMediaElementSource(videoElement);

var YTBgainNode = YTBaudioCtx.createGain();

YTBgainNode.gain.value = YTBsoundBoost

YTBsource.connect(gainNode)

YTBgainNode.connect(audioCtx.destination)

//Not much to see here
//Put YTB in front of variables since I read a prefix should avoid having a variable with same name existing on page I change audio for.
}());
