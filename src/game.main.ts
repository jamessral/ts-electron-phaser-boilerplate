class Game {
  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create })
  }

  game: Phaser.Game;

  preload() {
    this.game.load.image('player', './assets/player.png');
  }

  create() {
    let player = this.game.add.sprite(100, 100, 'player');
  }
}

window.onload = () => {
  const game = new Game();
}
