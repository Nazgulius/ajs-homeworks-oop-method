import Character from '../Character.js';
import Bowerman from '../class/Bowerman.js';

test('Error in name', () => {
  expect(() => new Character('A', 'Bowerman')).toThrow('Name mistake. The name must be between 2 and 10 characters.');
})

test('Error in type', () => {
  expect(() => new Character('Alex', 'Bow')).toThrow('Type error. The type can be: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.');
})

test('Error in name', () => {
  const warrior = new Character('Alex', 'Bowerman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'Bowerman',
  }
  expect(warrior).toEqual(correct);
})

test ('character level up!', () => {
  const result = new Bowerman('Makis', 'Bowerman');
  result.levelUp();

  expect(result).toEqual({
    name: 'Makis',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
})

test ('character fail level up', () => {
  const result = new Bowerman('Makis', 'Bowerman');
  result.health = 0;  

  expect(() => result.levelUp()).toThrow('You can not level up a deceased person!');
})

test ('character damage', () => {
  const result = new Bowerman('Makis', 'Bowerman');
  result.damage(10);

  expect(result.health).toBe(92.5);
})

test ('character damage', () => {
  const result = new Bowerman('Makis', 'Bowerman');
  result.health = 0;

  expect(() => result.damage(10)).toThrow('You are dead');
})

