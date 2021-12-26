var gameState = "wait"
var jumpS,coinS,fireS;
var titS,tipB,playB,tipBI,playBI,lv1BgI,lv1bg;
var player , playerRunningR,playerIdle,playerRunningL,f,fi;
// platforms for level one 
var plat1,plat2,plat3,plat4,plat5,plat6,plat7,plat8,plat9,plat10,plat11,plat12,plat13
,plat14,plat15,plat16,plat17;
var p1,p2,p3,p4;
var coin,coinI;
var invGround;
var tunnel1,tunnel2,tunnel3,tunnel4,tunnel5,tunnel6;
var tImage,pImage,tImage2;
var p1,p2,p3,p4,p5;
var invLine1,invLine2
function preload(){
  //loading images
  lv1BgI = loadImage("images/lv1bg.jpg")
    titS = loadImage("images/titleScreen.png")
    tipBI = loadImage("images/tips.png")
    playBI = loadImage("images/play.png")
    playerIdle = loadAnimation("images/Idle__000.png","images/Idle__001.png","images/Idle__002.png","images/Idle__003.png")
    playerRunningR = loadAnimation("images/Run__000.png","images/Run__001.png","images/Run__002.png"
    ,"images/Run__003.png","images/Run__004.png","images/Run__005.png")
    playerRunningL = loadAnimation("images/Run__006.png","images/Run__007.png","images/Run__008.png","images/Run__009.png",
    "images/Run__0010.png","images/Run__0011.png")
    p1 = loadImage("images/p1.png");
    p2 = loadImage("images/p2.png");
    p3 = loadImage("images/p3.png");
    p4 = loadImage("images/p4.png");
    coinI = loadImage("images/coin.gif")
    tImage = loadImage("images/pipe.png")
    tImag2 = loadImage("images/pipe2.png")
    pImage = loadImage("images/porcupine.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
  
  //backgrounds
    lv1bg = createSprite(width/2,height/2,width*5,displayHeight)
    lv1bg.addImage(lv1BgI)
    lv1bg.visible = false;
    lv1bg.scale = 1.5;
    invGround = createSprite(0,670,50000,20)
    invGround.visible = false;

    //creating play and tips button
     playB = createSprite(850,455,200,50)
     playB.addImage(playBI);
     playB.scale = 0.5
     tipB = createSprite(850,485,200,50)
     tipB.addImage(tipBI);
     tipB.scale = 0.5

     //lv1 platforms
     plat1 = createSprite(225,450,10,20)
     plat1.addImage(p2)
     plat1.scale = 0.7;
     plat1.visible = false;
     plat1.debug = true;
     plat1.setCollider("rectangle",-230,100,60,50)
     plat2 = createSprite(285,420,10,20)
     plat2.addImage(p1)
     plat2.scale = 0.5;
     plat2.debug = false;
     plat3 = createSprite(505,450,10,20)
     plat3.addImage(p2)
     plat3.scale = 0.7;
     plat3.debug = false;
     plat4 = createSprite(660,400,10,20)
     plat4.addImage(p3)
     plat4.scale = 0.7;
     plat4.debug = false;
     plat5 = createSprite(1280,450,10,20)
     plat5.addImage(p2)
     plat5.scale = 0.7;
     plat5.debug = false;
     plat6 = createSprite(1390,380,10,20)
     plat6.addImage(p2)
     plat6.scale = 0.7;
     plat6.debug = false;
     plat7 = createSprite(1500,330,10,20)
     plat7.addImage(p2)
     plat7.scale = 0.7;
     plat7.debug = false;
     plat8 = createSprite(plat7.x+10,550,10,20)
     plat8.addImage(p1)
     plat8.scale = 0.4;
     plat8.debug = false;
     plat9 = createSprite(2350,550,10,20)
     plat9.addImage(p2)
     plat9.scale = 0.7;
     plat9.debug = false;
     plat10 = createSprite(plat9.x+50,plat9.y-50,10,20)
     plat10.addImage(p2)
     plat10.scale = 0.7;
     plat10.debug = false;
     plat11 = createSprite(plat10.x+50,plat10.y-50,10,20)
     plat11.addImage(p2)
     plat11.scale = 0.7;
     plat11.debug = false;
     plat12 = createSprite(plat11.x+50,plat11.y-50,10,20)
     plat12.addImage(p2)
     plat12.scale = 0.7;
     plat12.debug = false;
     plat13 = createSprite(plat12.x+150,plat12.y,10,20)
     plat13.addImage(p2)
     plat13.scale = 0.7;
     plat13.debug = false;
     plat14 = createSprite(plat13.x+50,plat12.y+50,10,20)
     plat14.addImage(p2)
     plat14.scale = 0.7;
     plat14.debug = false;
     plat15 = createSprite(plat14.x+50,plat14.y+50,10,20)
     plat15.addImage(p2)
     plat15.scale = 0.7;
     plat15.debug = false;
     plat16 = createSprite(plat15.x+50,plat15.y+50,10,20)
     plat16.addImage(p2)
     plat16.scale = 0.7;
     plat16.debug = false;


    // obstacles lv1
    p1 = createSprite(810,615,30,20);
    p1.addImage(pImage);
    p1.scale = 0.15;

    //tunnels
    tunnel1 = createSprite(790,580,20,30)
    tunnel1.addImage(tImage);
    tunnel1.scale = 0.4;
    tunnel2 = createSprite(plat7.x+200,580,20,30)
    tunnel2.addImage(tImage);
    tunnel2.scale = 0.4;
    tunnel3 = createSprite(tunnel2.x+250,580,20,30)
    tunnel3.addImage(tImage);
    tunnel3.scale = 0.4;
    tunnel4 = createSprite(tunnel3.x,100,20,30)
    tunnel4.addImage(tImag2);
    tunnel4.scale = 0.4;
    tunnel5 = createSprite(tunnel2.x,100,20,30)
    tunnel5.addImage(tImag2);
    tunnel5.scale = 0.4;


    //creating player sprite
     player = createSprite(0,615,30,30);
     player.addAnimation("idle",playerIdle)
     player.addAnimation("runningR",playerRunningR)
     player.addAnimation("runningL",playerRunningL)
     player.scale = 0.2;
     player.visible = false;
     player.debug = true;
     
     //inv lines and platforms
     invLine1 = createSprite(player.x-100,200,50,20000);
     invLine1.visible = false;
     invLine2 = createSprite(plat15.x+50,200,50,20000);
     invLine2.visible = false;
}

function draw(){
console.log(mouseX,mouseY)

  if(gameState === "wait"){
background(titS);
  }

  if(mousePressedOver(playB)){

    gameState = "lv1";
  }
 
  if(gameState === "lv1"){
    lv1bg.visible = true;
    tipB.visible = false;
    playB.visible = false;
    player.visible = true;
    plat1.visible = true;
    player.collide(plat1);
    player.collide(invLine1);
    player.collide(invLine2);
/*    player.collide(plat2);
    player.collide(plat3);
    player.collide(plat4);*/

    camera.x = player.x+220;
    player.collide(invGround)


    if(keyDown("LEFT_ARROW")){
      player.changeAnimation("runningL",playerRunningL);
      player.x = player.x-5;
      lv1bg.x = lv1bg.x-2;
    }else{
      player.changeAnimation("idle",playerIdle)
    }
    if(keyDown("RIGHT_ARROW")){
      player.changeAnimation("runningR",playerRunningR);
      player.x = player.x+10;
      lv1bg.x = lv1bg.x+2;   
    }
    if(keyDown("UP_ARROW")){
      player.velocityY = -5
    }
    player.velocityY = player.velocityY + 0.8

  }
  drawSprites();

}


