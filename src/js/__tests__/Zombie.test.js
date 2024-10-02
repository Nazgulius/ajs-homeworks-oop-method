import Zombie from '../class/Zombie.js';

test('create Zombie', () => {
  const result = new Zombie('Zombie');
  const currect = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }

  expect(result).toEqual(currect);
});