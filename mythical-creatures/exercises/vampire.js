class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
  }

  drink() {
    if (this.thirsty === true) {
      this.thirsty = false
    }
  }

}


module.exports = Vampire;