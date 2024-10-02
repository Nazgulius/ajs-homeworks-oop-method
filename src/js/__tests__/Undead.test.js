import Undead from '../class/Undead.js';

test('create Undead', () => {
  const result = new Undead('Undead');
  const currect = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }

  expect(result).toEqual(currect);
});