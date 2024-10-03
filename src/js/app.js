// TODO: write your code here
import Bowerman from './class/Bowerman';

console.log('worked');

const person = new Bowerman('Ivan');

console.log(person);

person.levelUp();
person.damage(10);

console.log(person);