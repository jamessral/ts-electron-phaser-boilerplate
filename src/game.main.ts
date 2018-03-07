import 'phaser';

interface IConfig {
  width: number;
  height: number;
  type?: number;
  parent?: string;
  physics?: any;
  scene?: [Phaser.Scene];
}

class Game extends Phaser.Game {
  constructor(config: IConfig) {
    super(config);
  }
}

window.onload = () => {
  const game = new Game({
    height: 600,
    parent: 'game',
    physics: {
      arcade: {
        gravity: { y: 250 },
      },
      default: 'arcade',
    },
    type: Phaser.AUTO,
    width: 800,
  });
};
