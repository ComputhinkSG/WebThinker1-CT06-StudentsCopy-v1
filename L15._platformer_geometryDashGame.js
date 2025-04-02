// Comment out each section before moving to the next

/////////////////////////////////////////////////////////
// Recap 1: Array of bouncing balls

let circleX = [200, 200, 200];
let circleY = [50, 150, 250];
let circleSpeed = [];
let circleColour = [];
let numCircle = 3; // Number of circles
let circleSize = 50;

function setup() {
    createCanvas(400, 300);

    circleColour = [color(255,0,0),color(0,255,0),color(0,0,255)];

    // Generate random speed for each star
    for (let i = 0; i < numCircle; i++) {
        circleSpeed.push(random(1, 3));
    }
}

function draw() {
    // STUDENTS: Animate the movement of balls here

}

/////////////////////////////////////////////////////////
// Task 1: Player Sprite



/////////////////////////////////////////////////////////
// Task 2: Endless Obstacles



/////////////////////////////////////////////////////////
// Task 3: Lose Condition



/////////////////////////////////////////////////////////
// Task 4: Score Tracking



/////////////////////////////////////////////////////////
// Challenge 1: "R" to restart



/////////////////////////////////////////////////////////
// Challenge 2: "Space" to start



/////////////////////////////////////////////////////////
// Challenge 3: Adding Sound



/////////////////////////////////////////////////////////