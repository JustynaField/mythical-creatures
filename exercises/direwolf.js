class Direwolf {
  constructor (name, home, size) {
    this.name = name;
    this.home = home === undefined ? 'Beyond the Wall' : home;
    this.size = size === undefined ? 'Massive' : size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect (stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      stark.safe = true;
      this.starksToProtect.push(stark);
      this.huntsWhiteWalkers = false;
    }
  }
}


module.exports = Direwolf;
