import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

// import Character from '../Character';
// import Monster from '../Monster';

export default class PVE extends Battle {
  private _player: Fighter;
  private _opponents: Array<Fighter | SimpleFighter>;

  constructor(
    player: Fighter, 
    opponents: Array<Fighter | SimpleFighter>,
  ) {
    super(player);
    this._player = player;
    this._opponents = opponents;
  }

  public fight(): number {
    // console.log('fight');
    // console.log(this._player);
    // console.log(this._opponents[0]);
    while (this._player.lifePoints > 0 && this._opponents.length > 0) {
      // this._player.attack(this._opponents[0]);
      this._opponents[0].receiveDamage(this._player.strength);
      this._opponents.forEach((e) => e.attack(this._player));
      // console.log(this._opponents[0].lifePoints);
      if (this._opponents[0].lifePoints === -1) {
        this._opponents.shift();
        // console.log('opponent died');
      }
    }
    return super.fight();
  }
}

// const player1 = new Character('');
// for (let i = 0; i < 63; i++) player1.levelUp();
// const monster = new Monster();
// const pve1 = new PVE(player1, [monster]);

// const player2 = new Character('');
// const monsters: Monster[] = [];
// for (let i = 0; i < 50; i++) monsters.push(new Monster());
// const pve2 = new PVE(player2, monsters);

// console.log([pve1.fight(), pve2.fight()]);