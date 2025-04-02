/////////////////////////////////////////////////////////
// Recap 1: Dynamic text with custom colour

// let inputField;
// let colorPicker;
// let displayText = "";
// let displayColor = 'black';

// function setup() {
//   createCanvas(200, 200);

//   // Create input field
//   inputField = createInput('');
//   inputField.position(20, 20);
//   inputField.input(updateText);

//   // Create color picker
//   colorPicker = createColorPicker('black');
//   colorPicker.position(20, 50);
//   colorPicker.input(updateColor);
// }

// function draw() {
//   background(220);

//   // Display text
//   fill(displayColor);
//   textSize(24);
//   text(displayText, 20, 150);
// }

// function updateText() {
//   displayText = inputField.value();
// }

// function updateColor() {
//   displayColor = colorPicker.color();
// }

/////////////////////////////////////////////////////////
// Task 1: User Inputs

// let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace;
// let submitButton;

// function setup() {
//     createCanvas(600, 600);
//     textSize(18);
//     textAlign(CENTER, CENTER);
    
//     // Create input fields
//     inputNoun = createInput("e.g. dog");
//     inputVerb = createInput("e.g. jump");
//     inputAdjective = createInput("e.g. happy");
//     inputAdverb = createInput("e.g. angrily");
//     inputPlace = createInput("e.g. ang mo kio");
    
//     inputNoun.position(250, 50);
//     inputVerb.position(250, 100);
//     inputAdjective.position(250, 150);
//     inputAdverb.position(250, 200);
//     inputPlace.position(250, 250);
    
//     // Create button
//     submitButton = createButton("Generate Story");
//     submitButton.position(250, 300);
//     submitButton.mousePressed(generateStory);
// }

// function draw() {
//     background(220);
//     fill(0);
    
//     text("Enter a noun:", 100, 60);
//     text("Enter a verb:", 100, 110);
//     text("Enter an adjective:", 100, 160);
//     text("Enter an adverb:", 100, 210);
//     text("Enter a place:", 100, 260);
// }

// function generateStory() {
//     console.log(inputNoun.value());
//     console.log(inputVerb.value());
//     console.log(inputAdjective.value());
//     console.log(inputAdverb.value());
//     console.log(inputPlace.value());
// }

/////////////////////////////////////////////////////////
// Task 2: Story Generator

// let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace;
// let submitButton;
// let story = "Your fun story will appear here!";
// let storyTemplates;

// function setup() {
//     createCanvas(600, 600);
//     textSize(18);
//     textAlign(CENTER, CENTER);
    
//     // Create input fields
//     inputNoun = createInput("e.g. dog");
//     inputVerb = createInput("e.g. jump");
//     inputAdjective = createInput("e.g. happy");
//     inputAdverb = createInput("e.g. angrily");
//     inputPlace = createInput("e.g. ang mo kio");
    
//     inputNoun.position(250, 50);
//     inputVerb.position(250, 100);
//     inputAdjective.position(250, 150);
//     inputAdverb.position(250, 200);
//     inputPlace.position(250, 250);
    
//     // Create button
//     submitButton = createButton("Generate Story");
//     submitButton.position(250, 300);
//     submitButton.mousePressed(generateStory);
    
//     // Define multiple story templates
//     storyTemplates = [
//         "The {adj} {noun} decided to {verb} {adv} at the {place}.",
//         "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
//         "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
//     ];
// }

// function draw() {
//     background(220);
//     fill(0);
    
//     text("Enter a noun:", 100, 60);
//     text("Enter a verb:", 100, 110);
//     text("Enter an adjective:", 100, 160);
//     text("Enter an adverb:", 100, 210);
//     text("Enter a place:", 100, 260);
    
//     textSize(20);
//     text(story, 50, height - 200, 500, 100);
// }

// function generateStory() {
//     let noun = inputNoun.value();
//     let verb = inputVerb.value();
//     let adjective = inputAdjective.value();
//     let adverb = inputAdverb.value();
//     let place = inputPlace.value();
    
//     // Select a random story template
//     let template = random(storyTemplates);
    
//     // Replace placeholders with user input
//     story = template.replace("{noun}", noun)
//                     .replace("{verb}", verb)
//                     .replace("{adj}", adjective)
//                     .replace("{adv}", adverb)
//                     .replace("{place}", place);
// }

/////////////////////////////////////////////////////////
// Challenge 1: Output onto Canvas

// let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace;
// let submitButton;
// let outputNoun = "";
// let outputVerb = "";
// let outputAdjective = "";
// let outputAdverb = "";
// let outputPlace = "";

// function setup() {
//   createCanvas(600, 600);
//   textSize(18);
//   textAlign(LEFT, TOP); // Align text to left and top
    
//   // Create input fields
//   inputNoun = createInput("e.g. dog");
//   inputVerb = createInput("e.g. jump");
//   inputAdjective = createInput("e.g. happy");
//   inputAdverb = createInput("e.g. angrily");
//   inputPlace = createInput("e.g. ang mo kio");
    
//   inputNoun.position(250, 50);
//   inputVerb.position(250, 100);
//   inputAdjective.position(250, 150);
//   inputAdverb.position(250, 200);
//   inputPlace.position(250, 250);
    
//   // Create button
//   submitButton = createButton("Generate Story");
//   submitButton.position(250, 300);
//   submitButton.mousePressed(generateStory);
// }

// function draw() {
//   background(220);
//   fill(0);
    
//   text("Enter a noun:", 100, 60);
//   text("Enter a verb:", 100, 110);
//   text("Enter an adjective:", 100, 160);
//   text("Enter an adverb:", 100, 210);
//   text("Enter a place:", 100, 260);

//   // Display the outputs as rows
//   text("Noun: " + outputNoun, 50, 350);
//   text("Verb: " + outputVerb, 50, 380);
//   text("Adjective: " + outputAdjective, 50, 410);
//   text("Adverb: " + outputAdverb, 50, 440);
//   text("Place: " + outputPlace, 50, 470);
// }

// function generateStory() {
//   outputNoun = inputNoun.value();
//   outputVerb = inputVerb.value();
//   outputAdjective = inputAdjective.value();
//   outputAdverb = inputAdverb.value();
//   outputPlace = inputPlace.value();
// }

/////////////////////////////////////////////////////////
// Challenge 2: Randomiser

// let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace;
// let submitButton;
// let story = "Your fun story will appear here!";
// let storyTemplates;

// let nouns = ["dog", "cat", "wizard", "bicycle", "cloud", "book"];
// let verbs = ["jump", "fly", "dance", "sing", "explode", "whisper"];
// let adjectives = ["happy", "sad", "silly", "scary", "tiny", "gigantic"];
// let adverbs = ["quickly", "slowly", "loudly", "softly", "mysteriously", "bravely"];
// let places = ["park", "school", "moon", "ocean", "library", "mountain"];

// function setup() {
//     createCanvas(600, 600);
//     textSize(18);
//     textAlign(CENTER, CENTER);

//     // Create input fields
//     inputNoun = createInput("e.g. dog");
//     inputVerb = createInput("e.g. jump");
//     inputAdjective = createInput("e.g. happy");
//     inputAdverb = createInput("e.g. angrily");
//     inputPlace = createInput("e.g. ang mo kio");

//     inputNoun.position(250, 50);
//     inputVerb.position(250, 100);
//     inputAdjective.position(250, 150);
//     inputAdverb.position(250, 200);
//     inputPlace.position(250, 250);

//     // Create submit button
//     submitButton = createButton("Generate Story");
//     submitButton.position(250, 300);
//     submitButton.mousePressed(generateStory);

//     // Create single randomize button, positioned right of submit button
//     let randomAllButton = createButton("Random All");
//     randomAllButton.position(submitButton.x + submitButton.width + 10, submitButton.y);

//     randomAllButton.mousePressed(randomizeAll);

//     // Define multiple story templates
//     storyTemplates = [
//         "The {adj} {noun} decided to {verb} {adv} at the {place}.",
//         "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
//         "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
//     ];
// }

// function draw() {
//     background(220);
//     fill(0);

//     text("Enter a noun:", 100, 60);
//     text("Enter a verb:", 100, 110);
//     text("Enter an adjective:", 100, 160);
//     text("Enter an adverb:", 100, 210);
//     text("Enter a place:", 100, 260);

//     textSize(20);
//     text(story, 50, height - 200, 500, 100);
// }

// function generateStory() {
//     let noun = inputNoun.value();
//     let verb = inputVerb.value();
//     let adjective = inputAdjective.value();
//     let adverb = inputAdverb.value();
//     let place = inputPlace.value();

//     // Select a random story template
//     let template = random(storyTemplates);

//     // Replace placeholders with user input
//     story = template.replace("{noun}", noun)
//         .replace("{verb}", verb)
//         .replace("{adj}", adjective)
//         .replace("{adv}", adverb)
//         .replace("{place}", place);
// }

// function randomizeAll() {
//     inputNoun.value(random(nouns));
//     inputVerb.value(random(verbs));
//     inputAdjective.value(random(adjectives));
//     inputAdverb.value(random(adverbs));
//     inputPlace.value(random(places));
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// Barebones input and button:

// let inputField;
// let submitButton;
// let outputArea;

// function setup() {
//   createCanvas(400, 200);
//   background(220);

//   // Create input field
//   inputField = createInput("Enter your text here");
//   inputField.position(55, 20); //These positions are relative to the window.

//   // Create button
//   submitButton = createButton("Show Input");
//   submitButton.mousePressed(displayInput); // Attach the function to the button's click event
//   submitButton.position(inputField.x + inputField.width + 10, inputField.y);
// }

// function displayInput() {
//     background(220);
//     const inputValue = inputField.value(); // Get the text from the input field
//     textSize(64);
//     textAlign(CENTER, CENTER);
//     text(inputValue, 200, 100);
// }



// Using replace():

// let storyText = ""; // Variable to store the generated story. Initialized as an empty string.
// let storyTemplates; // Variable to store an array of story templates.

// function setup() {
//   // Define multiple story templates as an array of strings.
//   storyTemplates = [
//     "The {adj} {noun} decided to {verb} {adv} at the {place}.",
//     "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
//     "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
//   ];

//   let template = random(storyTemplates); // Selects a random template from the storyTemplates array.

//   // Replace placeholders in the selected template with hardcoded example values.
//   storyText = template.replace("{noun}", "dog") // Replaces "{noun}" with "dog".
//                       .replace("{verb}", "jump") // Replaces "{verb}" with "jump".
//                       .replace("{adj}", "happy") // Replaces "{adj}" with "happy".
//                       .replace("{adv}", "angrily") // Replaces "{adv}" with "angrily".
//                       .replace("{place}", "ang mo kio"); // Replaces "{place}" with "ang mo kio".

//   console.log(storyText); // Prints the generated story to the console.
// }