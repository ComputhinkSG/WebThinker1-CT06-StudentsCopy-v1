/////////////////////////////////////////////////////////
// Task 1: Add setup()

// function setup() {
//   createCanvas(600, 400);
//   background(220); // light grey background
// }

/////////////////////////////////////////////////////////
// Challenge 1: ellipse()

// function draw() {
//   // Abstract Eye
//   ellipse(200, 200, 200, 100); // Outer eye shape (wider than tall)
//   ellipse(200, 200, 50, 100);  // Inner iris shape (also wider than tall)
//   ellipse(200, 200, 50, 25);   // Pupil (very wide and thin)
// }

/////////////////////////////////////////////////////////
// Challenge 2: circle()

// function draw() {
//   // Simple Face
//   ellipse(200, 200, 150, 150); // Head
//   ellipse(160, 180, 20, 20); // Left Eye
//   ellipse(240, 180, 20, 20); // Right Eye
//   ellipse(200, 230, 80, 40); // Mouth

//   // Mickey Mouse Ears (using circle())
//   circle(130, 120, 60); // Left ear
//   circle(270, 120, 60); // Right ear
// }

/////////////////////////////////////////////////////////
// Challenge 3: rect()

// function draw() {
//   // House
//   rect(100, 200, 200, 150); // Main house body

//   // Door
//   rect(180, 280, 40, 70);

//   // Windows
//   circle(150, 250, 30);
//   circle(250, 250, 30);

//   // Door knob
//   ellipse(210, 315, 10, 15); // Door knob (oval)
// }

/////////////////////////////////////////////////////////
// Challenge 4: triangle()

// function draw() {
//   // Rocket Body
//   ellipse(200, 150, 80, 150); // Main body

//   // Rocket Nose
//   triangle(200, 40, 165, 110, 235, 110); // Nose cone

//   // Rocket Window
//   circle(200, 150, 30); // Window

//   // Rocket Fins
//   rect(160, 220, 80, 20); // Lower Fin
// }

/////////////////////////////////////////////////////////
// Challenge 5: quad()

// function draw() {
//   // Robot Body
//   rect(100, 160, 200, 180); // Body

//   // Robot Eyes
//   circle(150, 220, 30); // Left eye
//   circle(250, 220, 30); // Right eye

//   // Robot Mouth (Quad)
//   quad(150, 300, 170, 320, 230, 320, 250, 300); // Mouth shape

//   // Robot Arms (Ellipse and Rect)
//   ellipse(80, 250, 60, 20); // Left arm upper
//   rect(50, 240, 30, 20); // left arm lower

//   ellipse(320, 250, 60, 20); // Right arm upper
//   rect(320, 240, 30, 20); // Right arm lower
// }

/////////////////////////////////////////////////////////
// Challenge 6: Colour and Fill

//// Task 3 in colour:
// function draw() {
//   background(220); // Light gray background

//   // Abstract Eye

//   // Outer eye shape
//   fill(255, 250, 205); // Light beige
//   stroke(0); // Black outline
//   ellipse(200, 200, 200, 100);

//   // Inner iris shape
//   fill(0, 100, 200); // Blue iris
//   noStroke(); // No outline for iris
//   ellipse(200, 200, 50, 100);

//   // Pupil
//   fill(0); // Black pupil
//   ellipse(200, 200, 50, 25);
// }

//// Task 4 in colour:
// function draw() {
//   background(240); // Light background

//   // Simple Face
//   fill(255, 220, 190); // Light skin tone
//   stroke(0); // Black outline
//   ellipse(200, 200, 150, 150); // Head

//   fill(255); // White eyes
//   ellipse(160, 180, 20, 20); // Left Eye
//   ellipse(240, 180, 20, 20); // Right Eye

//   fill(0); // Black pupils
//   circle(160, 180, 5);
//   circle(240, 180, 5);

//   fill(200, 0, 0); // Red mouth
//   ellipse(200, 230, 80, 40); // Mouth

//   // Mickey Mouse Ears (using circle())
//   fill(0); // Black ears
//   noStroke(); // No outline for ears
//   circle(130, 120, 60); // Left ear
//   circle(270, 120, 60); // Right ear
// }

//// Task 5 in colour:
// function draw() {
//   // House
//   fill(220, 200, 180); // Light beige house body
//   stroke(150, 130, 110); // Darker beige outline
//   rect(100, 200, 200, 150); // Main house body

//   // Door
//   fill(120, 80, 50); // Brown door
//   noStroke();
//   rect(180, 280, 40, 70);

//   // Windows
//   fill(180, 220, 255); // Light blue windows
//   stroke(100, 100, 100); // Gray window outlines
//   circle(150, 250, 30);
//   circle(250, 250, 30);

//   // Door knob
//   fill(255, 200, 0); // Gold door knob
//   noStroke();
//   ellipse(210, 315, 10, 15); // Door knob (oval)
// }

/////////////////////////////////////////////////////////
// Challenge 7: Funny Pokemon

// function draw() {
//   background(240); // Light gray background

//   // Funny Pokemon 1: "Squircle-chu" (Squirtle/Pikachu hybrid)
//   fill(255, 165, 0); // Orange tail
//   triangle(120, 110, 140, 130, 120, 150);

//   fill(255, 255, 0); // Yellow body
//   noStroke();
//   ellipse(100, 100, 80, 70); // Squircle-shaped body

//   fill(0); // Black eyes
//   circle(80, 80, 10);
//   circle(120, 80, 10);

//   fill(255, 0, 0); // Red cheeks
//   circle(70, 100, 15);
//   circle(130, 100, 15);

//   // Funny Pokemon 2: "Rect-mander" (Charmander with a rectangular head)
//   fill(255, 200, 0); // Flame tail
//   triangle(250, 180, 270, 160, 260, 190);

//   fill(255, 100, 0); // Orange body
//   stroke(0);
//   rect(200, 150, 60, 40); // Rectangular head
//   noStroke();
//   ellipse(230, 190, 80, 60); // Body

//   fill(0); // Black eyes
//   circle(215, 165, 8);
//   circle(245, 165, 8);

//   fill(255, 0, 0); // Red mouth
//   quad(210, 190, 220, 200, 240, 200, 250, 190);

//   // Funny Pokemon 3: "Tri-bulb" (Bulbasaur with a triangle body)
//   fill(100, 200, 100); // Green body
//   triangle(300, 250, 350, 300, 250, 300); // Triangle body
//   fill(0); //Black eyes
//   circle(315, 270, 10);
//   circle(335, 270, 10);

//   fill(150, 50, 150); // Purple bulb
//   ellipse(325, 250, 40, 30);
// }

/////////////////////////////////////////////////////////