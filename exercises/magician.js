class Magician {
  constructor (creature={}) {
    this.name = creature.name
    this.topHat = creature.hasOwnProperty('topHat')? creature.topHat :true

  }
}




module.exports = Magician;
