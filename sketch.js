const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ballImg
var ball
var wood
var woodImg
var potionImg
var bgImg
var brick1
var bg

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15
var b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30
var b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45


function preload(){
  ballImg=loadImage("images/images.png")  
  woodImg=loadImage("images/wood2.png")
  potionImg=loadImage("images/potion.jpg")
  bgImg=loadImage("images/bg.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight) 

engine = Engine.create();
world = engine.world;

bg = createSprite(windowWidth/2,windowHeight/2)
bg.addImage("bg",bgImg)
 
wood = createSprite(windowWidth/2,windowHeight-50)
wood.addImage("wood",woodImg)
wood.scale=1.1

ball = createSprite(windowWidth/2,windowHeight-110)
ball.addImage("ball",ballImg)
ball.scale=0.2
ball.velocityX=10
ball.velocityY=-5


b1 = createSprite(windowWidth/2-590,windowHeight/2-200,70,35)
b2 = createSprite(windowWidth/2-500,windowHeight/2-200,70,35)
b3 = createSprite(windowWidth/2-400,windowHeight/2-200,70,35)
b4 = createSprite(windowWidth/2-300,windowHeight/2-200,70,35)
b5 = createSprite(windowWidth/2-200,windowHeight/2-200,70,35)
b6 = createSprite(windowWidth/2-100,windowHeight/2-200,70,35)
b7 = createSprite(windowWidth/2-0,windowHeight/2-200,70,35)
b9 = createSprite(windowWidth/2+100,windowHeight/2-200,70,35)
b10 = createSprite(windowWidth/2+200,windowHeight/2-200,70,35)
b12 = createSprite(windowWidth/2+300,windowHeight/2-200,70,35)
b13 = createSprite(windowWidth/2+400,windowHeight/2-200,70,35)
b14 = createSprite(windowWidth/2+500,windowHeight/2-200,70,35)
b15 = createSprite(windowWidth/2+590,windowHeight/2-200,70,35)


b16 = createSprite(windowWidth/2-610,windowHeight/2-100,80,40)
b17 = createSprite(windowWidth/2-505,windowHeight/2-100,80,40)
b18 = createSprite(windowWidth/2-400,windowHeight/2-100,80,40)
b19 = createSprite(windowWidth/2-300,windowHeight/2-100,80,40)
b20 = createSprite(windowWidth/2-200,windowHeight/2-100,80,40)
b21 = createSprite(windowWidth/2-100,windowHeight/2-100,80,40)
b22 = createSprite(windowWidth/2-0,windowHeight/2-100,80,40)
b23 = createSprite(windowWidth/2+100,windowHeight/2-100,80,40)
b24 = createSprite(windowWidth/2+200,windowHeight/2-100,80,40)
b25 = createSprite(windowWidth/2+300,windowHeight/2-100,80,40)
b26 = createSprite(windowWidth/2+400,windowHeight/2-100,80,40)
b27 = createSprite(windowWidth/2+505,windowHeight/2-100,80,40)
b28 = createSprite(windowWidth/2+610,windowHeight/2-100,80,40)

b31 = createSprite(windowWidth/2-620,windowHeight/2-0,90,40)
b32 = createSprite(windowWidth/2-510,windowHeight/2-0,90,40)
b33 = createSprite(windowWidth/2-400,windowHeight/2-0,90,40)
b34 = createSprite(windowWidth/2-300,windowHeight/2-0,90,40)
b35 = createSprite(windowWidth/2-200,windowHeight/2-0,90,40)
b36 = createSprite(windowWidth/2-100,windowHeight/2-0,90,40)
b37 = createSprite(windowWidth/2-0,windowHeight/2-0,90,40)
b38 = createSprite(windowWidth/2+100,windowHeight/2-0,90,40)
b39 = createSprite(windowWidth/2+200,windowHeight/2-0,90,40)
b40 = createSprite(windowWidth/2+300,windowHeight/2-0,90,40)
b41 = createSprite(windowWidth/2+400,windowHeight/2-0,90,40)
b42 = createSprite(windowWidth/2+510,windowHeight/2-0,90,40)
b43 = createSprite(windowWidth/2+615,windowHeight/2-0,90,40)

















edges=createEdgeSprites()

}


function draw(){
background("white")

Engine.update(engine);

ball.bounceOff(edges[2])
ball.bounceOff(edges[1])
ball.bounceOff(edges[0])
ball.bounceOff(wood)

wood.x=mouseX



drawSprites()
}
















