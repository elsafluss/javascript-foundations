class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
  }

  transform() {
    if (this.human) {
      this.human = false
      this.wolf = true
    } else {
      this.human = true
      this.wolf = false
    }
  }
}


module.exports = Werewolf