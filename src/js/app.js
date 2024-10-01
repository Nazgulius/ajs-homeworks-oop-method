// TODO: write your code here
import sum from './basic';
import Character from './Character';

console.log('worked');

const person = new Character('Ivan', 'Bowman');

console.log(person);

person.levelUp();
person.damage(10);

console.log(person);