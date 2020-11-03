class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ["Iris"]
    };
    this.disposition = "Good natured";
    this.humanWards = [];
    this.stolenBabies = 0;
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10
  }

  makeDresses(newDresses) {
    this.clothes.dresses = this.clothes.dresses.concat(newDresses)
  }

  provoke() {
    this.disposition = "Vengeful"
  }

  replaceInfant(baby) {
    this.stolenBabies++
    if (this.disposition === "Vengeful") {
      baby.disposition = "Malicious"
      this.humanWards.push(baby)
    } else {
      return baby
    }
    if (this.stolenBabies > 2) {
      this.disposition = "Good natured"
    }
  }
}

module.exports = Fairy