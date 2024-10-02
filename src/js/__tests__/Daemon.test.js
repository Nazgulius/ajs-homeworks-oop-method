import Daemon from '../class/Daemon.js';

test('create Daemon', () => {
  const result = new Daemon('Daemon');
  const currect = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }

  expect(result).toEqual(currect);
});