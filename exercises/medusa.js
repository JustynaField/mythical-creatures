class Medusa {
  constructor (name) {
    this.name = name;
    this.statues = [];
    this.counter = 0;
  }

  stare (victim) {
    this.counter ++;
    victim.stoned = true;
    if (this.statues.length < 3) {

      this.statues.push(victim);
    }

    if (this.statues.length > 3) {
       this.statues.shift();
    }

  }
}



module.exports = Medusa;
