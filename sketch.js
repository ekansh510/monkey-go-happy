
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)

  monkey = createSprite(80, 315, 20, 50);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1
  ground=createSprite(400,350, 900,10);
  ground.velocityX=-4
  FoodGroup= new Group()
  obstaclesGroup= new Group()
}


function draw() {
  background(255)
  if(ground.x>0){ 
  ground.x=ground.width/2
  }
  
   if (keyDown("space")) {
     monkey.velocityY = -12;
      
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
    
  banana1()
  obstacles1()
drawSprites()
  
  
}
function banana1(){
  if(frameCount%80===0){
  banana=createSprite(250,80,20,20)
  banana.y=Math.round(random(20,350))
    banana.addImage("banana",bananaImage)
  banana.scale=0.1
    banana.velocityX=-5  
  banana.lifetime=500
    FoodGroup.add(banana)
  } 
}
function obstacles1(){
 if (frameCount % 300 === 0) {
     obstacle = createSprite(400, 330, 10, 40);
 obstacle.addImage("obstacle",obstacleImage)
    obstacle.velocityX = -6;
  obstacle.x=Math.round(random(20,350))
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;

    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
 }


