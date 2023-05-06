import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import * as Archetypes from './Archetypes';
import * as Races from './Races';
import Battle, { PVE, PVP } from './Battle';

const DWARF = 'Magni Bronzebeard';
const player1 = new Character(
  DWARF, 
  new Races.Dwarf(DWARF, 10), 
  new Archetypes.Warrior(DWARF),
);

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const ORC = 'Gul\'dan';
const player2 = new Character(
  ORC,
  new Races.Orc(ORC, 10),
  new Archetypes.Necromancer(ORC),
);

const HALFLING = 'Meriadoc Brandybuck';
const player3 = new Character(
  HALFLING,
  new Races.Halfling(HALFLING, 10),
  new Archetypes.Ranger(HALFLING),
);

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((e) => e.fight());
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };