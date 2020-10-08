var hunter ,hunterimg;
var bgImg;
var bg;
var zombie1,zombie2,zombie3,zombie4,zombie5;
var zombie1img,zombie2img,zombie3img,zombie4img,zombie5img;
function preload(){
	hunterimg=loadImage("hunter2.png");
bgImg=loadImage("zombie_bg.webp");
zombie1img=loadImage("z1.png");
zombie2img=loadImage("z2.png");
zombie3img=loadImage("z3.jpg");
zombie4img=loadImage("z4.jpg");
zombie5img=loadImage("z5.png");
}
function setup (){
	createCanvas(displayWidth,displayHeight);
 
//bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
//bg.addImage(bgImg)
//bg.scale=2.5;
hunter = createSprite(50,displayHeight-70,40,40);
hunter.addImage(hunterimg);
hunter.scale=0.5;
}
function draw(){
	background(bgImg)
	if(keyWentDown(UP_ARROW)){
		hunter.y=hunter.y-10
	}
	if(keyWentDown(DOWN_ARROW)){
		hunter.y=hunter.y+10
	}
	zombies();
	drawSprites();
}
function zombies(){
	if(frameCount%100===0){
		zombie1=createSprite(displayWidth+10,random(displayHeight-500,displayHeight-50),15,15);
		var n =Math.round(random(1,5))
		switch(n){
			case 1: zombie1.addImage(zombie1img);
			break;
			case 2: zombie1.addImage(zombie2img);
			break;
			case 3: zombie1.addImage(zombie3img);
			break;
			case 4: zombie1.addImage(zombie4img);
			break;
			case 5: zombie1.addImage(zombie5img);
			break;
			default:break;
		}
		zombie1.velocityX=-5;
		zombie1.scale=0.4;
  
	}
}