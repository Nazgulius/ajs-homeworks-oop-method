import Swordsman from '../class/Swordsman.js';

test('create Swordsman', () => {
  const result = new Swordsman('Swordsman');
  const currect = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }

  expect(result).toEqual(currect);
});