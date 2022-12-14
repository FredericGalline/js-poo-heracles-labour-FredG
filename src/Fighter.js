/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(ennemy) {
    let damage = Math.floor(Math.random() * this.strength) + 1;
    let dodge = damage - ennemy.dexterity;

    if (dodge > 0) {
      ennemy.life = ennemy.life - dodge;
    }

    return ennemy.life > 0 && this.life > 0
      ? `${ennemy.name} š”ļø ${this.name} š ${this.name} : ${this.life}`
      : `\nš ${ennemy.name} is dead\nš ${this.name} (š ${this.life})`;
  }
}
module.exports = Fighter;