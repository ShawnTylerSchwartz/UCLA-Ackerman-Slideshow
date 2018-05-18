# UCLA Ackerman Union Slideshow

![ASUCLA Student Union Logo](/assets/images/asucla_student_u.png){:height="300px" width="79px"}

Built with :blue_heart: :yellow_heart: by Shawn Schwartz, UCLA Bruin :bear: *Class of 2019*
*[ASUCLA](https://asucla.ucla.edu) Marketing Lead Student Web Developer*

## Description
Script for running historical timeline through a multi-projector setup in UCLA's Ackerman Student Union Level 1 Main Restaurant Area.

The main challenges and goals in completing this project were:

1. Local Browser Compatibility
 > At the request of UCLA, the script must run in a browser, (i.e. Gooogle Chrome), that could be placed in a kiosk setup for a multi-projector display.

2. No Server ##(neither localhost nor webhost)##
 > The computer connected to the multi-projector setup will not be connected to the internet and will not be running any localhost servers. 

3. Easily Editable
 > The people who will be updating the slides in the future wanted a system where images could be added seemlessly without having to edit code. 

## Architecture
Although simple in theory, my main challenge was building this script to be both (somewhat) dynamic--for the sake of future, non-programmers, to be able to update the image slides, change their order, and add new slides. Since no local server would be implemented, I was challenged in reading-in from the directory housing the slide images to be able to essentially count how many were placed in there. As a simple solution to this "problem," I created a separate "parameters.js" file to house the timing and number of images parameters. This solved the problem of separating these #essential parameters# from the rest of the script running the multi-projector slider, preventing accidental "breaking" or "touching" of the main script: "ackerman.js".

```javascript
// parameters.js
	// *********************
		// >>>> EDIT THESE PARAMETERS HERE:
		var duration = 15000; // time in ms (i.e., 1000ms = 1s)
		var numberOfImages = 32; // enter the number of images in the slideshow here
	// *********************
```

Then, once the parameters are set, "ackerman.js" will pre-load all of the slides before running. This is important since each slide is 3146px by 1200px in full resolution. Fortunately, since everything is hosted locally and no server is implemented, the preloading is quite "fast," (i.e., full resolution isn't an issue).

```javascript
// ackerman.js

	// Preloading of Image Paths into Array
	for(i = 1; i <= numberOfImages; ++i) {
		paths.push("assets/images/" + i + ".jpg");
		console.log(paths);
	}
```

> Overall, this was a fun, quick project and will be used to display historical aspects of UCLA's history throughout the past century.

*© 2018 Regents of the University of California. UCLA®, UCLA Bruins®, University of California Los Angeles® and all related trademarks are the property of the Regents of the University of California.*