class Werewolf {
  constructor (name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  transform() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    if (this.wolf == true) {
      this.hungry = true;
    } else {
      this.hungry = false;
    }
  }

  eat(victim) {
    if (!this.human) {
      victim.eaten = true;
      this.human = true;
    }
  }
}


module.exports = Werewolf;
