/////////////////////////////////////////////////////////
// Recap 1: Seconds to next Minute

// let bgColor;

// function setup() {
//     createCanvas(400, 400);
//     textSize(32);
//     textAlign(CENTER, CENTER);
//     bgColor = 220;
//     interval = setInterval(changeBackground, 1000);
// }

// function draw() {
//     let secondsUntilNextMinute = 60 - second();
//     background(bgColor);
//     fill(0);
//     text(secondsUntilNextMinute, width / 2, height / 2);
// }

// function changeBackground() {
//     bgColor = color(random(255), random(255), random(255));
// }

/////////////////////////////////////////////////////////
// Task 1: User Input

// let inputText;
// let userText = "Your Text Here";

// function setup() {
//     createCanvas(600, 400);
    
//     // Create input field for name
//     inputText = createInput();
//     inputText.position(200, height -80);
//     inputText.input(updateText); // Callback function when input changes
// }

// function draw() {
//     background(220); // Set background color

//     // Display user's name
//     fill(0);
//     textSize(28);
//     textAlign(CENTER, CENTER);
//     text(userText, width / 2, 180);

//     // Label instructions
//     textSize(16);
//     textAlign(LEFT);
//     fill(0);
//     text("Enter text here:", 20, height -70);
// }

// // Function to update name from input field
// function updateText() {
//     userText = this.value();
// }

/////////////////////////////////////////////////////////
// Task 2: Background Colour

// let colorPicker;

// function setup() {
//     createCanvas(600, 400);

//     // Create color picker
//     colorPicker = createColorPicker("#ffcc00");
//     colorPicker.position(200, height -50);
// }

// function draw() {
//     background(colorPicker.value()); // Set background color based on picker

//     // Draw name tag rectangle
//     fill(255);
//     rect(50, 100, 500, 160, 10); // Rounded rectangle

//     // Label instructions
//     textSize(16);
//     textAlign(LEFT);
//     fill(0);
//     text("Pick a background color:", 20, height -32);
// }

/////////////////////////////////////////////////////////
// Task 3: Name Tag

// let nameInput;
// let ageInput;
// let colorPicker;
// let userName = "Your Name";
// let userAge = "Age";

// function setup() {
//     createCanvas(600, 400);
    
//     // Create input field for name
//     nameInput = createInput();
//     ageInput = createInput();
//     nameInput.position(200, height -100);
//     ageInput.position(200, height -75);
//     nameInput.input(updateName); // Callback function when input changes
//     ageInput.input(updateAge);

//     // ageInput.position(20, height + 40);

//     // Create color picker
//     colorPicker = createColorPicker("#ffcc00");
//     colorPicker.position(200, height -50);
// }

// function draw() {
//     background(colorPicker.value()); // Set background color based on picker

//     // Draw name tag rectangle
//     fill(255);
//     rect(50, 100, 500, 160, 10); // Rounded rectangle

//     // Display user's name
//     fill(0);
//     textSize(28);
//     textAlign(CENTER, CENTER);
//     text(userName, width / 2, 140);
//     text(userAge, width / 2, 200);

//     // Label instructions
//     textSize(16);
//     textAlign(LEFT);
//     fill(0);
//     text("Enter your name:", 20, height -90);
//     text("Enter your age:", 20, height -60);
//     text("Pick a background color:", 20, height -32);
// }

// // Function to update name from input field
// function updateName() {
//     userName = this.value();
// }

// function updateAge(){
//     userAge = this.value();
// }

/////////////////////////////////////////////////////////
// Challenge 1: User Name and Age

// let nameInput;
// let ageInput;
// let userName = "Your Name";
// let userAge = "Age";

// function setup() {
//     createCanvas(600, 400);
    
//     // Create input field for name
//     nameInput = createInput();
//     ageInput = createInput();
//     nameInput.position(200, height -100);
//     ageInput.position(200, height -75);
//     nameInput.input(updateName); // Callback function when input changes
//     ageInput.input(updateAge);
// }

// function draw() {
//     background(220); // Set background color

//     // Display user's name
//     fill(0);
//     textSize(28);
//     textAlign(CENTER, CENTER);
//     text(userName, width / 2, 140);
//     text(userAge, width / 2, 200);

//     // Label instructions
//     textSize(16);
//     textAlign(LEFT);
//     fill(0);
//     text("Enter your name:", 20, height -90);
//     text("Enter your age:", 20, height -60);
// }

// // Function to update name from input field
// function updateName() {
//     userName = this.value();
// }

// function updateAge(){
//     userAge = this.value();
// }

/////////////////////////////////////////////////////////
// Challenge 2: Extra Customisation

// // Declare variables for input fields and color pickers
// let nameInput;
// let ageInput;
// let backgroundColorPicker;
// let textColorPicker;
// let rectangleColorPicker;

// // Initialize default values for user name and age
// let userName = "Your Name";
// let userAge = "Age";

// // Setup function to initialize canvas and UI elements
// function setup() {
//   // Create a canvas of 600x400 pixels
//   createCanvas(600, 400);

//   // Create input field for user's name
//   nameInput = createInput();
//   // Create input field for user's age
//   ageInput = createInput();

//   // Position the name input field
//   nameInput.position(200, height - 150);
//   // Position the age input field
//   ageInput.position(200, height - 125);

//   // Attach the updateName function to the name input's input event
//   nameInput.input(updateName);
//   // Attach the updateAge function to the age input's input event
//   ageInput.input(updateAge);

//   // Create a color picker for the background color
//   backgroundColorPicker = createColorPicker("#ffcc00");
//   // Position the background color picker
//   backgroundColorPicker.position(200, height - 100);

//   // Create a color picker for the text color
//   textColorPicker = createColorPicker("#000000");
//   // Position the text color picker
//   textColorPicker.position(200, height - 75);

//   // Create a color picker for the rectangle color
//   rectangleColorPicker = createColorPicker("#ffffff");
//   // Position the rectangle color picker
//   rectangleColorPicker.position(200, height - 50);
// }

// // Draw function to render the canvas content
// function draw() {
//   // Set the background color using the selected color from the background color picker
//   background(backgroundColorPicker.value());

//   // Draw the name tag rectangle
//   fill(rectangleColorPicker.value());
//   // Create a rounded rectangle
//   rect(50, 50, 500, 160, 10);

//   // Display the user's name
//   fill(textColorPicker.value());
//   textSize(28);
//   textAlign(CENTER, CENTER);
//   // Display the name at the center of the rectangle
//   text(userName, width / 2, 90);
//   // Display the age below the name
//   text(userAge, width / 2, 150);

//   // Display label instructions for input fields and color pickers
//   textSize(16);
//   textAlign(LEFT);
//   fill(0);
//   // Display the name input label
//   text("Enter your name:", 20, height - 140);
//   // Display the age input label
//   text("Enter your age:", 20, height - 115);
//   // Display the background color picker label
//   text("Pick background color:", 20, height - 90);
//   // Display the text color picker label
//   text("Pick text color:", 20, height - 65);
//   // Display the rectangle color picker label
//   text("Pick rectangle color:", 20, height - 40);
// }

// // Function to update the userName variable when the name input field changes
// function updateName() {
//   userName = this.value();
// }

// // Function to update the userAge variable when the age input field changes
// function updateAge() {
//   userAge = this.value();
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// Final project:

// let nameInput;
// let ageInput;
// let colorPicker;
// let userName = "Your Name";
// let userAge = "Age";

// function setup() {
//     createCanvas(600, 400);
    
//     // Create input field for name
//     nameInput = createInput();
//     ageInput = createInput();
//     nameInput.position(200, height -100);
//     ageInput.position(200, height -75);
//     nameInput.input(updateName); // Callback function when input changes
//     ageInput.input(updateAge);

//     // ageInput.position(20, height + 40);

//     // Create color picker
//     colorPicker = createColorPicker("#ffcc00");
//     colorPicker.position(200, height -50);
// }

// function draw() {
//     background(colorPicker.value()); // Set background color based on picker

//     // Draw name tag rectangle
//     fill(255);
//     rect(50, 100, 500, 160, 10); // Rounded rectangle

//     // Display user's name
//     fill(0);
//     textSize(28);
//     textAlign(CENTER, CENTER);
//     text(userName, width / 2, 140);
//     text(userAge, width / 2, 200);

//     // Label instructions
//     textSize(16);
//     textAlign(LEFT);
//     fill(0);
//     text("Enter your name:", 20, height -90);
//     text("Enter your age:", 20, height -60);
//     text("Pick a background color:", 20, height -32);
// }

// // Function to update name from input field
// function updateName() {
//     userName = this.value();
// }

// function updateAge(){
//     userAge = this.value();
// }



// Input demo:

// let inputText;
// let userText = "Your Text Here";

// function setup() {
//     createCanvas(600, 400);
    
//     // Create input field for name
//     inputText = createInput();
//     inputText.position(200, height -80);
//     inputText.input(updateText); // Callback function when input changes
// }

// function draw() {
//     background(220); // Set background color

//     // Draw name tag rectangle
//     fill(255);
//     rect(50, 100, 500, 160, 10); // Rounded rectangle

//     // Display user's name
//     fill(0);
//     textSize(28);
//     textAlign(CENTER, CENTER);
//     text(userText, width / 2, 180);

//     // Label instructions
//     textSize(16);
//     textAlign(LEFT);
//     fill(0);
//     text("Enter text here:", 20, height -70);
// }

// // Function to update name from input field
// function updateText() {
//     userText = this.value();
// }



// Barebones input:

// let inputText; // Variable to store the input field element
// let userText = "Your Text Here"; // Default text to display

// function setup() {
//   createCanvas(600, 400); // Create a canvas of 600x400 pixels

//   // Create input field for name
//   inputText = createInput(); // Create an input field element
//   inputText.position(200, height - 80); // Position the input field 200 pixels from the left and 80 pixels from the bottom
//   inputText.input(updateText); // Attach the updateText function to the input field's input event, so it's called whenever the input changes
// }

// function draw() {
//   background(220); // Set the background color to light gray (220)

//   // Display user's name
//   fill(0); // Set the fill color to black
//   textSize(28); // Set the text size to 28 pixels
//   textAlign(CENTER, CENTER); // Align the text to the center horizontally and vertically
//   text(userText, width / 2, 180); // Display the userText at the center of the canvas (horizontally) and 180 pixels from the top
// }

// // Function to update name from input field
// function updateText() {
//   userText = this.value(); // Update the userText variable with the current value of the input field
// }



// Barebones colour picker:

// let nameInput; // Variable to store a name input field (not used in this code)
// let ageInput; // Variable to store an age input field (not used in this code)
// let colorPicker; // Variable to store the color picker element

// function setup() {
//   createCanvas(600, 400); // Create a canvas of 600 pixels wide and 400 pixels high

//   // Create color picker
//   colorPicker = createColorPicker("#ffcc00"); // Create a color picker element with initial color #ffcc00 (yellowish)
//   colorPicker.position(200, 32); // Position the color picker at x=200 and y=32 on the canvas
// }

// function draw() {
//   background(colorPicker.value()); // Set the background color of the canvas to the currently selected color from the color picker

//   // Label instructions
//   textSize(16); // Set the text size to 16 pixels
//   textAlign(LEFT); // Align the text to the left
//   fill(0); // Set the text color to black (0)
//   text("Pick a background color:", 20, 50); // Display the text "Pick a background color:" at x=20 and y=50 on the canvas
// }