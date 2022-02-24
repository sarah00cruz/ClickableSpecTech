
/***********************************************************************************
  ClickableAllocator
  by Sarah Cruz

  Start your localhost before running this, otherwise no PNGs will display

  Shows an example of how to use allocation tables with the
  modified p5.clickable class. This uses a ClickableManager class to
  (1) allocate and set variables from a .csv file
  (2) draw all the clickables that are visible in a single function


***********************************************************************************/

// the manager class
var clickablesManager;

// an array of clickable objects
var clickables;

// indexes into the array (constants)
const blue = 0;
const green = 1;
const pink = 2;
const sparkle = 3;
const stripe = 4;
const switcher = 5;

// ALWAYS allocate the ClickableManager in the preload() function
// if you get an error here, it is likely the .csv file that is not the
// correct filename or path

let hair, textbox;
let xclip1, xclip2, xclip3, xclip4, xclip5;
let xclip6;
let guess = null;

function preload(){
  clickablesManager = new ClickableManager('assets/clickableLayout.csv');
  hair = loadImage('assets/hair.png');
  textbox = loadImage('assets/text.png');
  xclip1 =loadImage('assets/blueClip.png');
  xclip2 =loadImage('assets/greenClip.png');
  xclip3 =loadImage('assets/pinkClip.png');
  xclip4 =loadImage('assets/sparkleClip.png');
  xclip5 =loadImage('assets/stripeClip.png');
  xclip6 =loadImage('assets/switchClip.png');
  clickablesManager.resize(10,10);
}

// ALWAYS call the setup() funciton for ClickableManager in the setup(), after
// the class has been allocated in the preload() function.
function setup() {
  createCanvas(windowWidth,windowHeight);
  clickables = clickablesManager.setup();

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array
  setupClickables();

  // start with a red balloon
  newBalloon(blue);

  // output to the message window
  console.log(clickables);
}

// Just draw the button
function draw() {
  background(0);
  image(hair,width/20,61,width*.4,height*.85);
  image(textbox,688,25,613,height/2.2);

//image(IMGNAME,W,H,X,Y)

  // draw "balloon"
  drawBalloon(xclip1);

  // draw the p5.clickables
  clickablesManager.draw();
}

function drawBalloon(guess) {
  push();
    image(guess,height/2.5-15,width/8,158,49);
  pop();
}

// change individual fields of the clickables
function setupClickables() {
    image(hair, 10,10,50,50);

  // These are the CALLBACK functions. Right now, we do the SAME function for all of the clickables
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onPress = clickableButtonPressed;
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;
    clickables[i].resize = clickableButtonResized;
  }
}

//--- CLICKABLE CALLBACK FUNCTIONS ----

clickableButtonResized = function(){

}

clickableButtonPressed = function () {
  if( this.id === green){
    newBalloon(this.id);
  }
  else if(this.id === pink){
    newBalloon(this.id);
  }
  else if(this.id === sparkle){
    newBalloon(this.id);
  }
  else if(this.id === stripe){
    newBalloon(this.id);
  }
  else if(this.id === switcher){
    newBalloon(this.id);
  }

}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#AA33AA";
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // Change colors based on the id #
  if( this.id === sparkle || this.id === stripe ) {
    this.color = "#FFFFFF00";
  }
  else {
    this.color = "#FFFFFF00";
  }

  this.noTint = true;
}

//--- BALLOON FUNCTIONS --

// on click, show a new clip style
function newBalloon(idNum) {

  if( idNum === blue) {
  }
  else if( idNum === green) {
    image(xclip2,height/2.5-15,width/8,158,49);
  }
  else if( idNum === pink) {
    image(xclip3,height/2.5-15,width/8,158,49);

  }
  else if( idNum === sparkle) {
    image(xclip4,height/2.5-15,width/8,158,49);
  }
  else if( idNum === stripe) {
    image(xclip5,height/2.5-15,width/8,158,49);
  }
  else if( idNum === switcher) {
    image(xclip6,height/2.5-15,width/8,158,49);
  }

}
