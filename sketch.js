var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var ground;
var score;
var backGroundImg, Background;

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backGroundImg=loadImage("Jungle.png.jpg");
 
}
function setup() {
  createCanvas(400,400);
  Background=createSprite(200,200);
  Background.addImage(backGroundImg);
  Background.velocityX=-2;
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visibile= false;
  console.log(ground.x);
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
}
function draw() {
  background("white");
  if (Background.x < -3){
  Background.x = Background.width/2;
    }
  if (ground.x < 0){
  ground.x = ground.width/2;
    }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  food();
  Obstacle();
  

  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  //var survivalTime=0;
 // stroke("white"); 
 // textSize(20);
 // text("Score :"+score,500,50);
//  stroke("black");
///  textSize(20);
//  fill("black");
//  survivalTime=Math.ceil(frameCount/frameRate());
 // text ( "Survival Time:",100,50);
  drawSprites();
}
function food(){
    if (frameCount % 80 === 0) {
    var banana = createSprite(400,205,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
     //assign lifetime to the variable
    banana.lifetime = 200;
    FoodGroup.add(banana);
}}
function Obstacle(){
    if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,339,40,10);
  //  banana.y = Math.round(random(120,200));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
}}


