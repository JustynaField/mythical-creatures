class Ogre {
  constructor (name, home) {
    this.name = name;
    this.home = home === undefined ? 'Swamp' : home;
    this.swings = 0;
  }
  encounter (human) {
    human.encounterCounter++;
    if(human.noticesOgre()){
      this.swingAt()
    }
  }
  swingAt (human) {
    // if (human.encounterCounter === 3) {

      this.swings++;
    // }
  }
}


module.exports = Ogre;
