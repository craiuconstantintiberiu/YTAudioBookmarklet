javascript: (function() {
    var YTBsoundBoost = prompt("By how much do you want to multiply the audio compared to initial?", "2");
    if (typeof YTBgainNode === 'undefined') {
        YTBourVideo = document.querySelector("video");
        YTBaudioCtx = new AudioContext();
        YTBsource = YTBaudioCtx.createMediaElementSource(YTBourVideo);
        YTBgainNode = YTBaudioCtx.createGain();
        YTBgainNode.gain.value = YTBsoundBoost;
        YTBsource.connect(YTBgainNode);
        YTBgainNode.connect(YTBaudioCtx.destination);
    }
    YTBgainNode.gain.value = YTBsoundBoost;
}())
