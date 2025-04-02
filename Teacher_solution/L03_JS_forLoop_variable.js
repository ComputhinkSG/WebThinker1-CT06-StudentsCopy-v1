/////////////////////////////////////////////////////////
// Recap 1: Repeating Circles

// function setup() {
//   createCanvas(600, 400);
//   background(220);
// }

// function draw() {
//     circle(75, 200, 100);
//     circle(225, 200, 100);
//     circle(375, 200, 100);
//     circle(525, 200, 100);
// }

/////////////////////////////////////////////////////////
// Task 1: Colour Gradient

// function setup() {
//     createCanvas(400, 200);
//     background(220);
// }
  
// function draw() {
//     for (let i = 0; i < 5; i++) {
//         fill(i * 50)
//         circle(50 + i * 50, 100, 40);
//     }
// }

/////////////////////////////////////////////////////////
// Task 2: Colour Loop

// colourValue = 0

// function setup() {
//     createCanvas(200, 200);
//     background(220);
// }

// function draw() {
//     fill(colourValue % 256)
//     circle(100, 100, 100)
//     colourValue += 1
// }

/////////////////////////////////////////////////////////
// Task 3: Row of Circles

// function setup() {
//     createCanvas(200, 200);
//     background(220);
// }

// function draw() {
//     for (let row = 0; row < 5; row++) {
//         circle(15 + (row * 30), 15, 30)
//     }
// }

/////////////////////////////////////////////////////////
// Task 4: Grid of Circles

// function setup() {
//     createCanvas(200, 200);
//     background(220);
// }

// function draw() {
//     for (let col = 0; col < 5; col++) {
//         for (let row = 0; row < 5; row++) {
//             circle(15 + (row * 30), 15 + (col * 30), 30)
//         }
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 1: Reversed Gradient

// function setup() {
//     createCanvas(400, 200);
//     noStroke();
//   }
  
//   function draw() {
//     background(220);
  
//     for (let i = 0; i < 10; i++) {
//       fill(200 + i * ((50 - 200) / (10 - 1)));
//       square(40 + i * 40, 85, 30);
//     }
//   }

/////////////////////////////////////////////////////////
// Challenge 2: Smooth Gradient

// function setup() {
//     createCanvas(400, 200);
//     background(220);
//     noStroke();
//   }
  
//   function draw() {
//     for (let i = 0; i < 256; i++) {
//       fill(i);
//       square(57.5 + i, 70, 30);
//     }
//   }

/////////////////////////////////////////////////////////
// Challenge 3: Checkered Pattern

// function setup() {
//     createCanvas(400, 400);
//     noStroke();
//     noLoop();
// }

// function draw() {
//     for (let row = 0; row < 5; row++) {
//         for (let col = 0; col < 5; col++) {
//             fill(((row + col) % 2) * 255); // 0 or 255
//             rect(col * 80, row * 80, 80, 80);
//         }
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 4: Height-based Stripes

// let numStripes = 8;
// let stripeHeightRatio = 0.1; // Ratio of stripe height to canvas height
// let color1 = 150; // First color
// let color2 = 200; // Second color

// function setup() {
//     createCanvas(400, 400);
//     noStroke();
// }

// function draw() {
//     let stripeSpacing = height / numStripes;
//     let stripeHeight = height * stripeHeightRatio;

//     for (let i = 0; i < numStripes; i++) {
//     let y = i * stripeSpacing;
//     let colorSwitch = i % 2;
//     let stripeColor = color1 * (1 - colorSwitch) + color2 * colorSwitch;

//     fill(stripeColor);
//     rect(0, y, width, stripeHeight);
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 5: Dynamic Symmetry

// let numDivisions = 5; // Number of horizontal divisions
// let shapeSizeRatio = 0.6; // Ratio of shape size to section width
// let lightGrey = 220;
// let darkGrey = 100;

// function setup() {
//     createCanvas(400, 200);
//     noStroke();
// }

// function draw() {
//     background(255); // White background

//     let sectionWidth = width / numDivisions;
//     let shapeSize = sectionWidth * shapeSizeRatio;

//     for (let i = 0; i < numDivisions; i++) {
//         let xCenter = i * sectionWidth + sectionWidth / 2; // Center of the section
//         let yCenter = height / 2; // Center vertically

//         let colorSwitch = i % 2; // 0 or 1

//         let sectionColor = lightGrey * (1 - colorSwitch) + darkGrey * colorSwitch;
//         let circleColor = lightGrey * colorSwitch + darkGrey * (1 - colorSwitch);

//         fill(sectionColor);
//         rect(i * sectionWidth, 0, sectionWidth, height); // Draw the section background

//         fill(circleColor);
//         circle(xCenter, yCenter, shapeSize); // Draw the centered circle
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 6: Canvas Resize

// let numRows = 10;
// let numCols = 15;
// let shapeSizeRatio = 0.05; // Relative to smallest dimension

// function setup() {
//   createCanvas(400, 300);
//   noStroke();
// }

// function draw() {
//   background(220);

//   let rowSpacing = height / numRows;
//   let colSpacing = width / numCols;
//   let shapeSize = min(width, height) * shapeSizeRatio; // Size relative to smaller dimension

//   for (let row = 0; row < numRows; row++) {
//     for (let col = 0; col < numCols; col++) {
//       let x = col * colSpacing + colSpacing / 2;
//       let y = row * rowSpacing + rowSpacing / 2;

//       let colorVal = (col + row) % 3; // Cycle through 3 colors
//       let shapeVal = (col * row) % 4; // Cycle through 4 shapes

//       if (colorVal === 0) {
//         fill(255, 100, 100); // Light red
//       } else if (colorVal === 1) {
//         fill(100, 255, 100); // Light green
//       } else {
//         fill(100, 100, 255); // Light blue
//       }

//       if (shapeVal === 0) {
//         ellipse(x, y, shapeSize, shapeSize);
//       } else if (shapeVal === 1) {
//         rect(x - shapeSize / 2, y - shapeSize / 2, shapeSize, shapeSize);
//       } else if (shapeVal === 2) {
//         triangle(x, y - shapeSize / 2, x - shapeSize / 2, y + shapeSize / 2, x + shapeSize / 2, y + shapeSize / 2);
//       } else {
//         rect(x - shapeSize/2, y - shapeSize/4, shapeSize, shapeSize/2);
//       }
//     }
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// function setup() {
//     createCanvas(400, 400);
//     noStroke();
//   }
  
//   function draw() {
//     background(220);
  
//     let gridSize = 10;
//     let cellSize = width / gridSize;
  
//     for (let x = 0; x < gridSize; x++) {
//       for (let y = 0; y < gridSize; y++) {
//         let posX = x * cellSize + cellSize / 2;
//         let posY = y * cellSize + cellSize / 2;
  
//         // Solid colors based on shape type
//         let shapeType = (x + y) % 3;
//         if (shapeType === 0) {
//           fill(255, 0, 0, 200); // Red
//         } else if (shapeType === 1) {
//           fill(0, 255, 0, 200); // Green
//         } else {
//           fill(0, 0, 255, 200); // Blue
//         }
  
//         push();
//         translate(posX, posY);
  
//         if (shapeType === 0) {
//           rect(-cellSize / 4, -cellSize / 4, cellSize / 2, cellSize / 2);
//         } else if (shapeType === 1) {
//           ellipse(0, 0, cellSize / 2, cellSize / 2);
//         } else {
//           triangle(-cellSize / 4, cellSize / 4, 0, -cellSize / 4, cellSize / 4, cellSize / 4);
//         }
  
//         pop();
//       }
//     }
//     noLoop();
//   }



// function setup() {
//     createCanvas(400, 200);
//     background(220);
// }
  
// function draw() {
//     for (let i = 0; i < 5; i++) {
//         circle(50 + i * 50, 100, 40);
//     }
// }



// function setup() {
//     createCanvas(400, 200);
//     background(220);
//   }
  
//   function draw() {
//     let spacing = 50; // Spacing between circles
  
//     for (let i = 0; i < numCircles; i++) {
//       circle(spacing + i * spacing, 100, 40);
//     }
//   }



// function setup() {
//     createCanvas(200, 200);
//     background(220);
// }

// function draw() {
//     // Draw a rectangle that fills the width of the canvas
//     rect(0, 50, width, 100);

//     // Draw a circle in the center of the canvas
//     circle(width / 2, height / 2, 50);
// }



// function setup() {
//     createCanvas(400, 200);
//     background(220);
// }

// function draw() {
//     let numCircles = 5;
//     let circleSize = 40;
//     let spacing = circleSize + 10; // Spacing based on circle size
//     let totalWidth = (numCircles - 1) * spacing; // Total width of all circles + spacing
//     let startX = (width - totalWidth) / 2; // Calculate starting x to center
//     let yPosition = height / 2;         // Center vertically

//     for (let i = 0; i < numCircles; i++) {
//         ellipse(startX + i * spacing, yPosition, circleSize, circleSize);
//     }
// }



// function setup() {
//     createCanvas(200, 200);
//     background(220);
// }

// function draw() {
//     let circleDiameter = 30;
//     let numCircles = 5;
//     let totalWidth = numCircles * circleDiameter;
//     // Calculate starting x for centering
//     let startX = (width - totalWidth) / 2 + circleDiameter / 2;

//     for (let i = 0; i < numCircles; i++) {
//         let x = startX + i * circleDiameter;
//         ellipse(x, height / 2, circleDiameter, circleDiameter);
//     }
// }



// function setup() {
//     createCanvas(200, 200);
//     background(220);
// }

// function draw() {
//     let circleDiameter = 30;
//     let numCircles = 5;
//     let totalWidth = numCircles * circleDiameter;
//     let startX = (width - totalWidth) / 2 + circleDiameter / 2;
//     let startY = (height - totalWidth) / 2 + circleDiameter / 2;

//     for (let row = 0; row < numCircles; row++) {
//         // Calculate the y-coordinate for each row's center
//         let rowY = startY + (circleDiameter * row);

//         for (let i = 0; i < numCircles; i++) {
//         let x = startX + i * circleDiameter;
//         ellipse(x, rowY, circleDiameter, circleDiameter);
//         }
//     }
// }



// colourValue = 0

// function setup() {
//     createCanvas(200, 200);
//     background(220);
// }

// function draw() {
//     fill(colourValue)
//     circle(100, 100, 100)
//     colourValue += 1
// }