class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    if (this.color == undefined) {
      this.color = 'white'
    } else {
      this.color = color;
    }
  }

  isWhite () {
    return false;
  }

  says (text) {
    return '**;* ' + text + ' *;**'
  }
}

module.exports = Unicorn;
