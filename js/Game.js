class Game {
  constructor() {}
  getState() {
    database.ref("gameState").on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    players = [player1, player2];
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    var x = 100;
    var y = 200;
    var index = 0;

    if (allPlayers != undefined) {
      for (var plr in allPlayers) {
        index = index + 1;
        x = 1300 - allPlayers[plr].distance;
        y = 2100 - allPlayers[plr].height;

        players[index - 1].x = x;
        players[index - 1].y = y;

        // FOR NAME AND HEALTH
        textSize(25);
        fill("green");
        text(
          allPlayers.player1.name +
            " : " +
            allPlayers.player1.health +
            " / 5 HP",
          x - 10,
          y - 250
        );
        text(
          allPlayers.player2.name +
            " : " +
            allPlayers.player2.health +
            " / 5 HP",
          x - 10,
          y - 250
        );
      }
    }
    // FOR MOVEMENT
    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.distance -= 10;
      player.update();
    }
    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
      player.distance += 10;
      player.update();
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.height += 10;
      player.update();
    } else {
      player.height = 1050;
      player.update();
    }
    if (player.height < 200) {
      player.height = 200;
      player.update();
    }

    drawSprites();
  }
}
