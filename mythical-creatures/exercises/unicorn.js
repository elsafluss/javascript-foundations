class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }

  isWhite() {
    if (this.color !== "white") {
      return false
    }
  }
  says(inputText) {
    return ("**;* " + inputText + " *;**")
  }
}

var firstUnicorn = new Unicorn("Elsa") //creates firstUnicorn with only name
console.log(firstUnicorn)
console.log(firstUnicorn.name)
console.log(firstUnicorn.color)


// console.log("look here", unicorn1)


module.exports = Unicorn;

//unicorn creates a new instance of the class Unicorn
//Unicorn is a class constructor
//Unicorn is a function that accepts two parameters, name and color