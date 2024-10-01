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

test ('character level up!', () => {
  const result = new Character('Makis', 'Bowman');
  result.levelUp();

  expect(result).toEqual({
    name: {name: 'Makis'},
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
})

test ('character damage', () => {
  const result = new Character('Makis', 'Bowman');
  result.damage(10);

  expect(result.health).toBe(92.5);
})