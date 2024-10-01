import Character from '../Character.js';

test('create character', () => {
  const result = new Character('Makis', 'Bowman');

  expect(result).toEqual({
    name: {name: 'Makis'},
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
})