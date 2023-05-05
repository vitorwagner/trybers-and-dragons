import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypesInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._createdArchetypesInstances;
  }
}