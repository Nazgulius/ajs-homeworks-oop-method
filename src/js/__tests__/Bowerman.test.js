import Bowerman from '../class/Bowerman.js';

test('create Bowerman', () => {
  const result = new Bowerman('Bowerman');
  const currect = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }

  expect(result).toEqual(currect);
});