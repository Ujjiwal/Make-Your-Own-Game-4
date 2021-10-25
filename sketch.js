var zombie , explosion , heart_1 , heart_2 , heart_3;
var lose , shooter_2 , shooter_3 , win , bg , bgImg;

function preload(){
zombie = loadImage("assets/zombie.png");
bgImg = loadImage("assets/bg.jpeg");
heart_1= loadImage("assets/heart_1.png");
heart_2 = loadImage("assets/heart_2.png");
heart_3 = loadImage("assets/heart_3.png");
shooter_2 = loadImage("assets/shooter_2.png");
shooter_3 = loadImage("assets/shooter_3.png");
}

function setup(){
createCanvas(1000,1000);

bg = createSprite(700,500);
bg.addImage(bgImg);
bg.scale = 1.1;

player = createSprite(200,650,20,20);
player.addImage(shooter_2);
player.scale = 0.5;
player.debug = true;
player.setCollider("rectangle",0,0,300,300);

zombieGroup = new Group();
bulletGroup = new Group();
}

function draw(){
    background(0);
    drawSprites();
    enemy();

    if(keyDown("UP_ARROW")){
     player.y -= 30;
    }
    if(keyDown("DOWN_ARROW")){
    player.y += 30;
    }
    if(keyDown("SPACE")){
    bullet = createSprite(200,player.y-30,20,20);
    bullet.velocityX = 10;
    bulletGroup.add(bullet);
    player.addImage(shooter_3);
    }
    if(zombieGroup.isTouching(bulletGroup)){
    zombieGroup.destroyEach();
    bulletGroup.destroyEach();
    }
    if(zombieGroup.isTouching(player)){
    player.destroy();
    zombieGroup.setVelocityXEach(0);
    }
    if(player.velocityY=0){
        zombieGroup.setVelocityXEach(0); 
    }
}

function enemy(){
if(frameCount%200===0){
    zombie1 = createSprite(random(500,1000),random(100,500),20,20);
    zombie1.addImage(zombie);
    zombie1.scale = 0.3;
    zombie1.velocityX = -3;
    zombie1.debug = true;
    zombie1.setCollider("rectangle",0,0,400,400);
    zombieGroup.add(zombie1);
}
}