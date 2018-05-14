//
//
// By Shawn T. Schwartz, 2018
// ASUCLA Marketing
// shawnschwartz@ucla.edu
// 
//

var paths = [];
var current = -1;

// Preloading of Image Paths into Array
for(i = 1; i <= numberOfImages; ++i) {
	paths.push("assets/images/" + i + ".jpg");
	console.log(paths);
}

var playIt = new Array();
for(i = 0; i < paths.length; i++) {
	playIt[i] = new Image();
	playIt[i].src = paths[i];
}

function swapIt() {
	current = (++current > paths.length-1)? 0 : current;
	next.src = playIt[current].src;

	setTimeout(swapIt, duration);
}

window.onload = function() {
	next = document.getElementById('ackermanViewer');
	swapIt();
}