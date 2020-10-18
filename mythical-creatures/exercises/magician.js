class Magician {
  constructor(magician) {
    // magician = magician || {}
    this.name = magician.name;
    this.topHat = this.hasHat(magician.topHat);
    this.confident = false;
    this.spellCount = 0
  }

  hasHat(value) {
    if (value === undefined) {
      return true
    }
    return value
  }

  incantation(magicWord) {
    return `${magicWord.toUpperCase()}!`
  }

  cast() {
    this.spellCount++
    this.checkConfidence()
    if (this.topHat) {
      return 'PULL RABBIT FROM TOP HAT'
    }
    return 'PULL DOVE FROM SLEEVE'
  }

  checkConfidence() {
    if (this.spellCount >= 3) {
      this.confident = true
    }
  }

  performShowStopper() {
    if (this.confident) {
      return 'WOW! The magician totally just sawed that person in half!'
    }
    return 'Oh no! Practice more before attempting this trick!'
  }
}

module.exports = Magician;