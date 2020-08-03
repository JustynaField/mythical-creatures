class Medusa {
  constructor (name, statues) {
    this.name = name;
    this.statues = [];
  }

  stare (victim) {
    victim.stoned = true;
    this.statues.push(victim);
    if (this.statues.length === 4) {
      this.statues.shift().stoned = false;
    }
  }
}



module.exports = Medusa;
