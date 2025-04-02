/////////////////////////////////////////////////////////
// Recap 1: Repeating Circles

// function setup() {
//     createCanvas(400, 400);
//     background(220);
// }
  
// function draw() {
//     for (let i = 0; i < 5; i++) {
//         fill(0, i * 50, 0);
//         circle(50 + i * 50, 50 + i * 50, 40);
//     }
// }
    
/////////////////////////////////////////////////////////
// Task 1: Random Colour Preview

// function setup() {
//     createCanvas(200, 200);
//     background(220);
//     fill(255);
//     circle(width / 2, height / 2, 80);
// }

// function mousePressed() {
//     fill(random(255), random(255), random(255));
//     circle(width / 2, height / 2, 80);
// }

// function mouseReleased() {
//     fill(255);
//     circle(width / 2, height / 2, 80);
// }

/////////////////////////////////////////////////////////
// Challenge 1: Random Shapes

// let canvasSize = 200;

// function setup() {
//     createCanvas(canvasSize, canvasSize);
//     background(220);
// }

// function mousePressed() {
//     fill(random(255), random(255), random(255));
//     triangle(random(canvasSize), random(canvasSize), random(canvasSize), random(canvasSize), random(canvasSize), random(canvasSize))
// }

// function mouseReleased() {
//     background(220);
// }

/////////////////////////////////////////////////////////
// Challenge 2: Expanding Circle

// let size = 0

// function setup() {
//     createCanvas(400, 400);
//     background(220)
// }

// function draw() {
//     circle(width/2, height/2, size)
// }

// function mouseMoved() {
//     size += 1;
// }

/////////////////////////////////////////////////////////
// Challenge 3: Paint Splatter

// function setup() {
//     createCanvas(400, 400);
//     background(220);
//     noStroke();
// }

// function mouseDragged() {
//     let x = mouseX + random(-10, 10);
//     let y = mouseY + random(-10, 10);
//     let size = random(5, 20);
//     let r = random(255);
//     let g = random(255);
//     let b = random(255);

//     fill(r, g, b);
//     circle(x, y, size);
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// || mousePressed() and mouseReleased(): ||
// let shapeColor = 'blue'; // Initial color

// function setup() {
//   createCanvas(400, 400);
//   background(220);
// }

// function draw() {
//   fill(shapeColor);
//   ellipse(200, 200, 80, 80); // Draw a circle
// }

// function mousePressed() {
//   shapeColor = 'red'; // Change color on press
// }

// function mouseReleased() {
//   shapeColor = 'blue'; // Change color back on release
// }



// || mousePressed() and mouseReleased() with random() ||
// function setup() {
//     createCanvas(200, 200);
//     background(220);
//     fill(255);
//     circle(width / 2, height / 2, 80);
// }

// function mousePressed() {
//     fill(random(255), random(255), random(255));
//     circle(width / 2, height / 2, 80);
// }



// || mouseMoved() ||
// function setup() {
//   createCanvas(400, 400);
//   background(220);
//   fill(255, 0, 0);
// }

// function mouseMoved() {
//   ellipse(mouseX, mouseY, 10, 10);
// }



// || mouseDragged() ||
// function setup() {
//     createCanvas(400, 400);
//     background(220);
// }

// function mouseMoved() {
//     background(220);
// }

// function mouseDragged() {
//     // Draw a circle at mouse position
//     ellipse(mouseX, mouseY, 20, 20);
// }