import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

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
    while (this._player.lifePoints > 0 && this._opponents.length > 0) {
      this._player.attack(this._opponents[0]);
      this._opponents.forEach((e) => e.attack(this._player));
      console.log(this._opponents[0].lifePoints);
      if (this._opponents[0].lifePoints === -1) {
        this._opponents.shift();
      }
    }
    return super.fight();
  }
}