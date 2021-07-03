let max_distance;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - 180);
  cnv.position(x, y);
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  resizeCanvas(windowWidth,windowHeight);
  background(191,0,255);
  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 66;
	  fill(17, 17, 17);
      ellipse(i, j, size, size);
    }
  }
}
