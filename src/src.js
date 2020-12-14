javascript :(function() {
  var YTBsoundBoost=prompt("By how much do you want to multiply the audio compared to initial?","2"); 
  if(typeof YTBgainNode ==='undefined')
  {
      var YTBourVideo = document.querySelector("video");
      var YTBaudioCtx = new AudioContext();
      var YTBsource = YTBaudioCtx.createMediaElementSource(YTBourVideo); 
      var YTBgainNode = YTBaudioCtx.createGain(); YTBgainNode.gain.value = YTBsoundBoost; 
      YTBsource.connect(YTBgainNode); YTBgainNode.connect(YTBaudioCtx.destination);
  } 
  else YTBgainNode.gain.value=YTBsoundBoost;

}());
