class Human {
  constructor (name) {
    this.name = name;
    this.encounterCounter = 0;
  }
  noticesOgre() {
    return this.encounterCounter && this.encounterCounter % 3 === 0


    // if(this.encounterCounter && this.encounterCounter % 3 === 0){
    //   orge.swings++;
    //   return true;
    // }else{
    //   return false
    // }
    // return (this.encounterCounter && this.encounterCounter % 3 === 0) ? (orge.swings++,true) : false;
  }
}

module.exports = Human;
