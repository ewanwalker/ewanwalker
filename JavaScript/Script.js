let NavActivations = 0;

function Navbar() {
	if( NavActivations == 0){
		document.getElementById("mySidebar").style.width = "20%";
		document.getElementById("main").style.marginLeft = "20%";
		NavActivations += 1;
	}
	else{
		closeNav();
		NavActivations = 0;
	}
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "7%";
  document.getElementById("main").style.marginLeft= "7%";
}

var i = 0;
var txt = 'Software Engineer';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("TypeOut").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function exampleFunction() {
	typeWriter()
}

// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}