class Player {
  constructor() {
    this.index = null;
    this.name = null;
    this.health = 5;
    this.distance = 0;
    this.height = 0;
    this.bend = 0;
  }

  display() {}

  getCount() {
    database.ref("playerCount").on("value", function (data) {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      health: this.health,
      distance: this.distance,
      height: this.height,
      bend: this.bend,
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
