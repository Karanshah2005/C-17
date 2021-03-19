
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var baGroup,obGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() { 
monkey=createSprite(80,315,900,10);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
   obGroup=new Group();  
  baGroup= new Group();
  survivalTime=0;
}


function draw() {
 background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
    
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground);
  
   
 
  
  
  SurvivalTime=Math.ceil(frameCount/frameRate())
  
  
 obstacles();
  bananas();
  if(obGroup.isTouching(monkey)){
    survivalTime =0;
  } 
 
   drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time:" + SurvivalTime,100,50); 
  
}

function obstacles(){
  if(frameCount %300 == 0){  
   
   var obstacle=createSprite(200,327,10,40);
     
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-5;
    obstacle.lifetime=250;
    obGroup.add(obstacle);
  }
}
  function bananas(){
  if(frameCount %80 == 0){
   banana=createSprite(200,200);
    banana.y=random(50,250);  
    banana.addImage(bananaImage); 
    banana.scale=0.1;
    banana.velocityX=-5;
    monkey.depth=banana.depth+1;
    banana.lifetime=250;
    baGroup.add(banana); 
  }
}




