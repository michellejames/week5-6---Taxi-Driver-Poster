console.log("Hello World from main.js!");

var background = document.querySelector( ".background" );
	background.style.height = window.innerHeight +"px";

var backgroundHeight = parseFloat ( background.style.height );
	background.style.width = ( backgroundHeight * .71 ) + "px";

// var taxiWindow = document.querySelector ( ".taxi-window" );
var taxi = document.querySelector ( ".taxi" );

var taxiPosition = parseFloat ( taxi.style.left );

if ( taxiPosition <= 50 ) {
	taxiWindow.style.opacity = 1;
}


var createParticle = function() {

	var particle = document.createElement("div");
	document.body.appendChild(particle);

	particle.style.position = "absolute";
	particle.style.top = "-10px";
	particle.style.left = Math.random () * window.innerWidth +"px";
	particle.style.width = "1px";
	particle.style.height = "4px";
	particle.style.transform = "rotate(-30deg)";
	particle.style.overflow = "hidden";

	var speed = Math.random () * 50 + 1;

	var moveParticle = function() {

		var styleLeft = parseFloat ( particle.style.left );
		var styleTop = parseFloat ( particle.style.top );

		styleLeft = styleLeft - ( speed * -0.1 );
		styleTop = styleTop + speed;

		if (styleTop > (window.innerHeight/2)) {
	            particle.style.backgroundColor = "#0f1110";
	        } else {
	            particle.style.backgroundColor = "#f2b401";

	    }

		if ( styleTop > window.innerHeight) {
			styleTop = -10;
			styleLeft = Math.random () * window.innerWidth * 1.3;
		}
		
		particle.style.top = styleTop + "px";
		particle.style.left = styleLeft + "px";

	}
	setInterval ( moveParticle, 50 );
}

createParticle();

var particleCount = 100;

	for (var i = 0; i < particleCount; i++) {
		createParticle();


	};












