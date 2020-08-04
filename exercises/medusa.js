class Medusa {
  constructor (name) {
    this.name = name;
    this.statues = [];
  }

  stare (victim) {
    victim.stoned = true;
    this.statues.push(victim);

    if (this.statues.length == 4) {
      this.statues[0].stoned = false;
      this.statues.shift(victim)
    }
  }
}



module.exports = Medusa;
