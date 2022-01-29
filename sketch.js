var s1, s2, s3, s4,f , b1, h1, c;
var home1;
var canvas;
function preload(){
    home1 = loadImage("NageshHome.png");
    s1 = loadImage("s1.png");
    s2 = loadImage("s2.png");
    s3 = loadImage("s3.png");
    s4 = loadImage("s4.png");
    b1=loadImage("b1.png");
    h1=loadImage("h1.png");
    //f=loadImage("f.png");
}

function setup(){
    canvas=createCanvas(500, 600);
    // flower = createSprite(width/2-30, height/2);
    // flower.addImage(b1);
    // flower.scale=0.7;
    home = createSprite(width/2, height/3);
    home.addImage(h1);
    home.scale=0.4;
    c="#C495F0";
}

function draw(){
    background(c);
  //  stars();
    drawSprites();
}

function stars(){
    if(frameCount % 100 == 0){
        for(i=0; i<=width; i=i+70){
            var star = createSprite(i,-50);
            var r = Math.round(random(1,4));
            switch(r){
                case 1: star.addImage(s1);
                star.scale=random([0.2, 0.15]);
                        break;
                case 2: star.addImage(s2);
                        star.scale = random([0.08, 0.05])
                        break;
                case 3: star.addImage(s3);
                star.scale=random([0.2, 0.15]);
                        break;
                case 4: star.addImage(s4);
                star.scale = random([0.08, 0.05])
                        break;
            }
            star.velocityY = random([4,5]);
            star.lifetime = width;
        }
    }
}