var welcomeScr, playButton;
var gameState=0;
var backgroundImg;
var welcomeImg,gameImg;
var playButtonImg;
var timer=5;
var timeout=5;
var god;
var hadesImg,zeusImg,posiedonImg;
var level=1;
var power1,power2,power3;
var athena_p1,athena_p2,athena_p3;
var attack=1;


function preload(){
  welcomeImg =loadImage ("Images_GOW/WelcomeBg.jpg");
  gameImg =loadImage ("Images_GOW/gameBg.jpg");
  playButtonImg =loadImage ("Images_GOW/playButton.png");
  titleImg =loadImage ("Images_GOW/title.png");
  hadesImg =loadImage ("Images_GOW/hades.png");
  zeusImg =loadImage ("Images_GOW/zeus.png");
  posiedonImg =loadImage("Images_GOW/posiedon.png");
  athenaImg =loadImage("Images_GOW/athena.png");
  athenaMonImg =loadImage("Images_GOW/athenaMon.png");
  posiedonMonImg =loadImage("Images_GOW/monster_posiedon.png");
  zeusMonImg =loadImage("Images_GOW/monster_zeus.png");
  athena_p1 =loadImage("Images_GOW/shield.png");
  athena_p2 =loadImage("Images_GOW/arrow.webp");
  athena_p3 =loadImage("Images_GOW/invisible_p3.png");

}

function setup() {
  createCanvas(800,400);

  playButton = createSprite(400, 300, 50, 50);
  playButton.addImage(playButtonImg);
  playButton.scale=0.1

  title = createSprite(390, 50, 50, 50);
  title.addImage(titleImg);
  title.scale=0.2
  
  edges=createEdgeSprites();

  god = createSprite(150, 250, 50, 50);
  //god.addImage(hadesImg);
  god.scale=0.5
  god.visible=false;
 


  giant = createSprite(450, 300, 50, 50);
  giant.scale=0.3
  giant.visible=false;
  

  power1 = createSprite(300, 100, 50, 50);
  power1.scale=0.01
  power1.visible=false;

  power2 = createSprite(400, 100, 50, 50);
  power2.scale=0.1
  power2.visible=false;

  power3 = createSprite(500, 100, 50, 50);
  power3.scale=0.1
  power3.visible=false;

  
}

function draw() {
  countDown();
  power();
  if(gameState ==0){
    backgroundImg=welcomeImg;
    if(mousePressedOver(playButton)){
      gameState=1;
    }
  }
  else{ 
    backgroundImg= gameImg;
  }
  background(backgroundImg);  

  if(gameState==1){
    playButton.visible=false;
    title.visible=false;
    selectLevel();

    if(timer==0){
      god.visible=true;
      giant.visible=true;
      power1.visible=true;
      power2.visible=true;
      power3.visible=true;
    }
   
  }

  god.collide(edges);
  control();
  

  drawSprites();
display();

}

function display(){
  if (gameState==0){
    fill("darkred");
    //stroke("black")
    textSize(20);
    textFont("Herculanum");
    text("RULES",width/2-40,140);
    textSize(15);
    text("1.	The player has to defeat the giant using only its power to reach next level.",width/2-270,160);
    text("2.	Player can chose power out of three options . ",width/2-270,180);
    text("3.	Player has to defeat giant in particular lifeline. ",width/2-270,200);
    text("4.	If payer lifeline of player is zero game gets over.  ",width/2-270,220);
    text("5.	If giant lifeline is zero game moves to next level and the god changes. ",width/2-270,240);
    //text("if you want ti=o play click on the play button below ",ngeswidth/2-270,280);
  }
  if (gameState==1){
    if (frameCount%30==0&& timer > 0){
        timer--;
       
    }
    if(timer>0){
      fill("black");
      textSize(20);
      textFont("Herculanum");
      text("first round is  godess Athena against giant Enceladus",width/2-250,height/4)
    }
  }
}
function selectLevel(){
 
  switch(level){
    case 1: god.addImage(athenaImg);
            giant.addImage(athenaMonImg);
  
            power1.addImage(athena_p1);
            power2.addImage(athena_p2);
            power3.addImage(athena_p3);
            break;
    case 2: god.addImage(posiedonImg);
            giant.addImage(posiedonMonImg);
            break;
    case 3: god.addImage(zeusImg);
            giant.addImage(zeusMonImg);
            break;

  }
}

function control(){
  if(keyDown("left")){
  god.x-=10
  giant.x=random(100,750);
  }
  if(keyDown("right")){
    god.x+=10
    giant.x=random(100,750);
  }
  if(keyDown("up")){
    god.y-=10
    giant.y=random(100,350);
  }
  if(keyDown("down")){
    god.y+=10
    giant.y=random(100,350);
  }

}

function countDown(){

    if (frameCount%30==0&& timeout > 0){
        timeout--;
    }
    if(timeout==0){
      attack = !attack;
      timeout=5;
    }

}
function power(){
  if(attack==true){
    if(mousePressedOver (power1)){
      god.debug=true;
    }
  }
}