export default class Character {
  constructor(name, type){  
    this.name = createCharName(name);
    this.health = 100;
    this.level = 1;  

  function createCharName(name) {
    try {
      if (name.length > 1 && name.length < 11) {
            return {
              name: name,
            }
      } else {
        throw new Error('Name mistake. The name must be between 2 and 10 characters.');
      }      
    } catch (error) {
      console.log(error);
    }
  }  
  
  try {
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
  } catch (error) {
    console.log(error);
  }
  }
}