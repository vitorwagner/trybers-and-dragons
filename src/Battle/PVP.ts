import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player: Fighter;
  private _opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._player = player;
    this._opponent = opponent;
  }

  public fight(): number {
    while (this._player.lifePoints > 0 && this._opponent.lifePoints > 0) {
      this._player.attack(this._opponent);
      this._opponent.attack(this._player);
    }
    return super.fight();
  }
}