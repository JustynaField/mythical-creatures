class Hobbit {
  constructor (name, age) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old= false;
    if (name === 'Frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }
  celebrateBirthday () {
    this.age ++;
    if (this.age > 32) {
      this.adult = true;
    }
    if (this.age >100) {
      this.old = true;
    }
  };
}

module.exports = Hobbit;
