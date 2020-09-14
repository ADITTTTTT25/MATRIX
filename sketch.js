const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// all variables
var allPlayers;
var player;
var database;
var playerCount;
var gameState = 0;
var form;
var bend = 0;
var game;
var background_Img2;
var bckground;
var bckground2;
var bckground3;
var bckground4;
var bckground5;
var bckground6;
var box;
var title;
var titleImg;
var scene2IMG;
var readyUPIMG;
var scene3IMG;
var smithDodges;
var neoDodges;
var screen1 = 1;
var screen2 = 0;
var screen3 = 0;
var screen4 = 0;
var ground;
var song1;
var player1_img, player2_img;
var players = [];
var player1;
var player2;
var health;
var gun;
var sentinel;
var sentinel_IMG;
var neoDodges_img;
var smithDodges_img;
var timer = 0;
var sc;
var telephone_img;
var telephone;

function preload() {
  //all images
  titleImg = loadImage("Images/Matrix.png");
  scene2IMG = loadImage("Images/Scene2.jpg");
  readyUPIMG = loadImage("Images/ReadyUP.jpg");
  scene3IMG = loadImage("Images/Scene3.jpg");
  player1_img = loadImage("Images/N1.png");
  player2_img = loadImage("Images/S1.png");
  neoDodges_img = loadAnimation("Images/N8.png");
  smithDodges_img = loadAnimation("Images/S7.png");
  sentinel_IMG = loadImage("Images/Sentinel.png");
  song1 = loadSound("INTRO.mp3");
  telephone_img = loadImage("Images/Telephone.png");
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  //class object
  game = new Game();
  bckground = new Background(500, 400);
  bckground2 = new Background(1500, 400);
  bckground3 = new Background(2500, 400);
  bckground4 = new Background(500, 1200);
  bckground5 = new Background(1500, 1200);
  bckground6 = new Background(2500, 1200);

  //sprites
  box = createSprite(1250, 700, 1200, 300);
  box.shapeColor = "black";

  title = createSprite(1250, 650);
  title.addImage(titleImg);

  ground = createSprite(-700, 700);

  game.getState();

  game.start();

  song1.setVolume(2);

  player1 = createSprite(500, 500, 100, 500);
  player1.addImage("player1", player1_img);
  player1.addAnimation("dodge1", neoDodges_img);
  player1.scale = 1.05;

  player2 = createSprite(500, 500, 500, 100);
  player2.addImage("player2", player2_img);
  player2.addAnimation("dodge2", smithDodges_img);
  player2.scale = 0.85;

  // neoDodges = new NeoDodge(1300 - Player.distance, 1050);
  // smithDodges = new SmithDodge(1300 - Player.distance, 1050);
  telephone = createSprite(random(100, 1200), random(100, 2500));
  telephone.addImage(telephone_img);
  telephone.scale = 0.00000000000001;
}

function draw() {
  Engine.update(engine);

  if (gameState === 0) {
    //telephone logic
    sc = second();
    if (sc >= 45 && sc < 55) {
      telephone.scale = 1;
    }
    if (sc === 55) {
      telephone.destroy();
    }
    // to display scene 2 when playerCount === 2
    if (playerCount === 2) {
      form.displayScene2();
    }

    if (screen1 === 1) {
      // // // // //FIRST SCREEN
      bckground.display();
      bckground2.display();
      bckground3.display();
      bckground4.display();
      bckground5.display();
      bckground6.display();
      drawSprites();
      song1.play();
    }

    if (screen2 === 1) {
      // // // // //SECOND SCREEN
      background(readyUPIMG);
    }
    if (screen3 === 1) {
      // // // // //THIRD SCREEN
      background(scene2IMG);
      // smithDodges.display();
      // neoDodges.display();

      // for bullet

      // if (keyCode === 38 && frameCount % 50 === 0) {
      //   var neoBullet = createSprite(player1.x, player1.y - 100, 50, 10);
      //   neoBullet.shapeColor = "green";
      //   neoBullet.velocityX = 25;
      //   neoBullet.velocityY = 1;
      //   neoBullet.lifetime = 200;
      // }

      // if (keyCode === 38 && frameCount % 50 === 0) {
      //   var smithBullet = createSprite(player2.x, player2.y - 100, 50, 10);
      //   smithBullet.shapeColor = "black";
      //   smithBullet.velocityX = -25;
      //   smithBullet.velocityY = 1;
      //   smithBullet.lifetime = 200;
      // }

      box.destroy();
      title.destroy();
      drawSprites();
      game.play();
    }

    if (screen4 === 1) {
      // // // //  //FOURTH SCREEN
      // background(scene3IMG);

      //for scrolling background and Sentinels (AS OF NOW TEMPORARY)
      ground.velocityX = 5;
      ground.scale = 1.6;
      ground.addImage(scene3IMG);
      if (ground.x > 3250) {
        ground.x = -700;
      }
      player1.destroy();
      player2.destroy();
      if (keyCode === 70) {
        sentinel = createSprite(500, 400, 50, 50);
        sentinel.addImage(sentinel_IMG);
        var randX = random(1, 10) * 175;
        sentinel.x = randX;
        sentinel.velocityY = 5;
        sentinel.scale = 0.2;
        drawSprites();
      }
      drawSprites();
    }
  }
}
