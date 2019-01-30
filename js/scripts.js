/* scripts.js */

// Clock hand variables
const MINUTEHAND = document.querySelector(".minute-hand");
const HOURHAND = document.querySelector(".hour-hand");
const SECONDHAND = document.querySelector(".second-hand");

// Time function
function run_the_clock(){
	var date = new Date();
	let min = date.getMinutes();
	let hr = date.getHours();
	let sec = date.getSeconds();

	let minPosition = (min * 360/60) + (sec * 360/60)/60;
	let hrPosition = hr * 360/24 + ((min * 360/60)/24);
	let secPosition = sec * 360/60;

	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)" + "translate(-50%, -50%)";
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)" + "translate(-50%, -50%)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)" + "translate(-50%, -50%)";
}

var interval = setInterval(run_the_clock, 1000);