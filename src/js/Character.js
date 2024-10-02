export default class Character {
  constructor(name, type){      
    this.health = 100;
    this.level = 1;  

    this.attack = undefined;
    this.defence = undefined;

    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Name mistake. The name must be between 2 and 10 characters.');
    }    
    
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {  
      throw new Error('Type error. The type can be: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.');
    } else {
      this.type = type;
    }
  }

  levelUp() {
    if (this.health > 0) {      
      this.level += 1;
      this.attack += ((this.attack / 100) * 20); 
      this.defence += ((this.defence / 100) * 20);   
      this.health = 100;
    } else {      
      throw new Error('You can not level up a deceased person!');
    } 
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {      
      throw new Error('You are dead');
    } 
  }
}