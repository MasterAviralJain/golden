const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,backgroundimg,man,manimg;




function preload() {
    backgroundimg=loadImage("images/background.png");
   
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-200);
    man=createSprite(displayWidth-100,displayHeight-300,10,30);
   
}

function draw(){
    background(backgroundimg);


    drawSprites();
   
}

