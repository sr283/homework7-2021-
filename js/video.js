var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *=.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.95;
	console.log("New speed is "+ video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100+"%"

});

document.querySelector("#mute").addEventListener("click", function() {

	if(video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute" }
	
	else {
	video.muted = false;
	document.querySelector("#mute").innerHTML="Mute"}
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.ended == false) {
		console.log("Original location "+video.currentTime)
		video.currentTime += 15;
		console.log("New location "+video.currentTime)}
	else {
		console.log("Original location "+video.currentTime)
		video.currentTime = 0
		console.log("New location "+video.currentTime)
		video.play()}
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.pause();
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.pause();
	video.classList.remove("oldSchool");
});
