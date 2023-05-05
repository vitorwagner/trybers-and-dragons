import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdDwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80; // A Dwarf with lower hitpoints than an elf? I hope this gets fixed in the next version.
    Dwarf._createdDwarfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._createdDwarfInstances;
  }
}