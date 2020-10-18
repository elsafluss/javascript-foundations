class Hobbit {
  constructor(name, age) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false ||
      this.name === "Frodo"
  }

  celebrateBirthday() {
    this.age++
    if (this.age > 100) {
      this.old = true
    } else if (this.age > 32 && this.age < 101) {
      this.adult = true
    }
  }

  timeTravel(age, type) {
    this.age += age
    if (this.age > 100) {
      this.old = true
    } else if (this.age > 32 && this.age < 101) {
      this.adult = true
    }
  }
}

module.exports = Hobbit;