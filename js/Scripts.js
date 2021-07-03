// When the user scrolls the page, execute myFunction
window.onscroll = function() {Stick()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function myFunction() { 
//start of the src for a Image located in the Questions file
var str1 = "https://raw.githubusercontent.com/ewanwalker/ewanwalker/main/Questions/image_";
//start of the src for a Image located in the Questions file
var str2 = "https://raw.githubusercontent.com/ewanwalker/ewanwalker/main/Answers/Answer_";
//the file type of the image to be got -->
var str3 = ".png";
//returns a random number under the num tag
var num = Math.floor((Math.random() * 23) + 1);
//converts the variable num to a string var n
var n = num.toString();
//Concaternation
var res = str1.concat(n).concat(str3);
var res2 = str2.concat(n).concat(str3);
//Assigns the images the srcs created
document.getElementById("demo").src = res;
document.getElementById("Answer").src = res2;
//resets the answers visability after a new question is requested
var x = document.getElementById("Answer");
	if (x.style.display === "block") {
		x.style.display = "none";
	}
}


//fuction ToggleVisability() checks to see the answers visability then swiches it -->
function ToggleVisability() {
	var x = document.getElementById("Answer");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Stick() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
	navbar.classList.remove("sticky");
	}
}


