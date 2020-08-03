class Centaur {
  constructor ({name: name, type: type}) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }

  shouldGetCranky (num) {
    if (num === 3) {
      this.cranky = true;
    }
  }

  shoot () {
    this.counter++;
    this.shouldGetCranky(this.counter);
    return this.cranky ? 'NO!' : 'Twang!!!'
  }

  run () {
    this.counter++;
    this.shouldGetCranky(this.counter);
    return this.cranky ? 'NO!' : 'Clop clop clop clop!!!'
  }

  sleep () {
    return 'NO!'
  }

  layDown () {
    this.standing = false;
    this.layingDown = true;
    this.cranky = true;
  }

  standUp () {
    this.standing = true;
    this.layingDown = false;
  }
}

module.exports = Centaur;
