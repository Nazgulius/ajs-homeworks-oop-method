import Magician from '../class/Magician.js';

test('create Magician', () => {
  const result = new Magician('Magician');
  const currect = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }

  expect(result).toEqual(currect);
});