class Form {
  constructor() {
    // TO MAKE ALL THE INPUTS/BUTTONS ETC
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.button2 = createButton("Ready Up");
    this.greeting = createElement("h2");
    this.title = createElement("h2");
    this.title2 = createElement("h2");
    this.reset = createButton("Reset");
    // this.readyUp = createButton("Change To Ready Up Screen");
    // this.fight1 = createButton("Change To Fight Scene 1");
    this.fight2 = createButton("Change To Fight Scene 2");
    this.title3 = createElement("h2");
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  display() {
    //  TO DISPLAY INTRO SCREEN
    screen1 = 1;
    screen2 = 0;
    screen3 = 0;
    screen4 = 0;
    this.input.position(980, 774);
    this.input.style("width", "300px");
    this.input.style("height", "24px");
    this.input.style("background", "black");
    this.input.style("color", "green");
    this.input.style("font-size", "25px");
    this.button.position(1300, 775);
    this.button.style("width", "100px");
    this.button.style("height", "30px");
    this.button.style("background", "black");
    this.button.style("color", "green");

    this.button.style("font-size", "20px");
    this.reset.position(1400, 775);
    this.reset.style("width", "100px");
    this.reset.style("height", "30px");
    this.reset.style("background", "black");
    this.reset.style("color", "green");

    //TO GO TO 2ND FIGHT SCENE (AS OF NOW TEMPORARY)
    this.fight2.mousePressed(() => {
      screen1 = 0;
      screen2 = 0;
      screen3 = 0;
      screen4 = 1;
      this.input.hide();
      this.button.hide();
    });

    //// Logic for Player Button
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      screen1 = 0;
      screen2 = 1;
      screen3 = 0;
      screen4 = 0;
      console.log(screen1);
      this.input.hide();
      this.button.hide();
      // this.reset.hide();
      background(readyUPIMG);
      this.title.html("You will be");
      this.title2.html("<=== OR ===>");
      this.title.position(1000, 15);
      this.title2.position(950, 500);
      this.title.style("font-size", "100px");
      this.title2.style("font-size", "100px");
      this.title.style("color", "white");
      this.title2.style("color", "white");
      this.button2.style("background", "black");
      this.button2.style("color", "green");
      this.button2.position(1230, 750);
      this.button2.style("width", "100px");
      this.button2.style("height", "30px");
    });

    // Logic for the reset button
    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
    });
  }

  //function
  displayScene2() {
    this.button2.mousePressed(() => {
      screen1 = 0;
      screen2 = 0;
      screen3 = 1;
      screen4 = 0;
      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.title2.hide();
      this.button2.hide();
      background(scene2IMG);
      drawSprites();
    });
  }
}
