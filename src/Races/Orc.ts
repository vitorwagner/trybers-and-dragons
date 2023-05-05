import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdOrcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._createdOrcInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._createdOrcInstances;
  }
}