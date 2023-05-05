import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const lifePoints = this._lifePoints - attackPoints;

    if (lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return lifePoints;
  }
  
  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
