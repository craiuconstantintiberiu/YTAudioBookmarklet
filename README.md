# YTAudioBookmarklet
Some Youtube/Twitch/Dailymotion videos are just too quiet/loud.( Such as one University professor's way too quiet tutorials for Computer Networks) 

Even though the volume slider is all the way to the right, all the way to the left, sometimes it just ain't enough.

This bookmarklet is relatively simple: you press it, you get a pop-up asking you by how much to multiply the audio coming out of the youtube video. 

You input it - bada-bing, bada-boom, the audio for the current video is changed by that much. Voila!


How to use:

1)Create a new bookmark with whatever name you wish. 


2)Copy this into the URL:


javascript: (function(){var YTBsoundBoost = prompt("By how much do you want to multiply the audio compared to initial?", "2"); if (typeof YTBgainNode === 'undefined') { YTBourVideo = document.querySelector("video"); YTBaudioCtx = new AudioContext(); YTBsource = YTBaudioCtx.createMediaElementSource(YTBourVideo); YTBgainNode = YTBaudioCtx.createGain(); YTBgainNode.gain.value = YTBsoundBoost; YTBsource.connect(YTBgainNode); YTBgainNode.connect(YTBaudioCtx.destination); } YTBgainNode.gain.value = YTBsoundBoost;}())


3)Click on the bookmark whenever you are on a page with a video. Should work on Youtube, Twitch, Dailymotion and most likely any page which uses a singular HTML5 video.
