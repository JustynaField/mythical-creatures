class Magician {
  constructor ({name, topHat} = {}) {
    this.name = name;
    this.topHat = topHat === undefined ? true : false;
    this.confident = false;
    this.counter = 0;
  }

  incantation (text) {
    return text.toUpperCase() + "!"
  }
  cast () {
    this.counter ++;
    if (this.counter === 3) {
      this.confident = true;
    }
    return !this.topHat ? 'PULL DOVE FROM SLEEVE' : 'PULL RABBIT FROM TOP HAT'
  }
  performShowStopper () {
    return this.confident ? 'WOW! The magician totally just sawed that person in half!' : 'Oh no! Practice more before attempting this trick!'
  }
}

module.exports = Magician;
