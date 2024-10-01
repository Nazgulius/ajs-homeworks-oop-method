export default class Character {
  constructor(name, type){  
    this.name = createCharName(name);
    this.health = 100;
    this.level = 1;  

    function createCharName(name) {    
      if (name.length > 1 && name.length < 11) {
            return {
              name: name,
            }
      } else {
        throw new Error('Name mistake. The name must be between 2 and 10 characters.');
      }
    }
    
    if (type == 'Bowman' || type == 'Swordsman' || type == 'Magician'
          || type == 'Undead' || type == 'Zombie' || type == 'Daemon') {
            if (type == 'Bowman' || type == 'Undead') {               
              this.type = type;
              this.attack = 25;
              this.defence = 25;
            } 
            if (type == 'Swordsman' || type == 'Zombie') {               
              this.type = type;
              this.attack = 40;
              this.defence = 10;
            } 
            if (type == 'Magician' || type == 'Daemon') {               
              this.type = type;
              this.attack = 10;
              this.defence = 40;
            } 
    } else {
      throw new Error('Type error. The type can be: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.');
    }
  }

  levelUp() {
    if (this.health > 0) {      
      this.level += 1;
      this.attack = ((this.attack / 100) * 20) + this.attack; 
      this.defence = ((this.defence / 100) * 20) + this.defence;   
      this.health = 100;
    } else {      
      throw new Error(`You can't level up a deceased person!`);
    } 
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}