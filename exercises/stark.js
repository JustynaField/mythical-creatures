class Stark {
  constructor (name, location) {
    this.name = name;
    this.location = location === undefined ? 'Winterfell' : location
    this.safe = false;
  }
  houseWords () {
    return this.safe ? 'The North Remembers' : 'Winter is Coming'
  }
}

module.exports = Stark;
