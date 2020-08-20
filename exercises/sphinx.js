class Sphinx {
  constructor () {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length === 4) {
      this.riddles.shift(riddle);
    }
  }
  attemptAnswer(answer) {
    let correctAnswer = false;

    this.riddles.forEach((riddle, index) => {
      if (riddle.answer === answer)  {
        correctAnswer = true;
        this.riddles.splice(index,1);
      }
    });

    if (correctAnswer) {
      if (!this.riddles.length ) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}"???`
      } else {
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    } else {
      this.heroesEaten++
    }


    // return correctAnswer ?
    //   this.riddles.length ?
    //     'That wasn\'t that hard, I bet you don\'t get the next one'
    //     : 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
    //   : this.heroesEaten++;
  }
}

module.exports = Sphinx;
