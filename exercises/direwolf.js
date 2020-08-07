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
  leave (stark) {
    this.starksToProtect.forEach((item, index) => {
      if (stark.name === item.name) {
        item.safe = false;
        this.starksToProtect.splice(index, 1)
      }
    });
  }
}


module.exports = Direwolf;
