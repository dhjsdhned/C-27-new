// created modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;

function preload() {
  // load the background and tower images
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  // create a canvas
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a new keyword to create a tower object
  tower= new Tower(150,350,160,310);
}

function draw() 
{
// create a color for the background and give image a width and height
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  //display tower
  tower.display();

 
}

