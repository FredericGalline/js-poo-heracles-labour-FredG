/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  getRandom(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  fight(ennemy) {
    let result = this.life;
    let damage = this.getRandom(this.strength);
    let dodge = damage - ennemy.dexterity;

    ennemy.life = dodge > 0 ? ennemy.life - dodge : ennemy.life;

    result =
      ennemy.life > 0 && this.life > 0
        ? (result = `${ennemy.name} 🗡️ ${this.name} 💙 ${this.name} : ${this.life}`)
        : (result = `\n💀 ${ennemy.name} is dead\n🏆 ${this.name} (💙 ${this.life})`);

    return result;
  }
}

module.exports = Fighter;
