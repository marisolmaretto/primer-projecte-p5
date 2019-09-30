let w = 400;
let h = 600;

function setup(){
    //createCanvas(400,400);
    //createCanvas(w,h);
    createCanvas(windowWidth,windowHeight);
    background('red')
}

function draw(){
    background(150);
    strokeWeight(30);
    stroke('black');
    //noStroke();
    fill('turquoise');
    //rect(0,0,100,100);
    ellipse(width/2,height/2,100);
    strokeWeight(1);
    noFill();
    ellipse(mouseX,mouseY,100);
    noFill();
    //stroke('orange');
    stroke(20,mouseX,mouseY);
    strokeWeight(1);
    triangle(mouseX,mouseY,200,200,300,300,100,300);
    fill('brown');
    //rectMode(CENTER);
    rect(0,0,200,200);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}