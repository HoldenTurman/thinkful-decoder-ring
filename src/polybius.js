// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    /*Create a variable that equals our input variable lowercased and split. That way we can go through each individual characters.*/
    const seperate = input.toLowerCase().split("");

    const cypher = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    if (encode) {
      /*Encoding messaage. We create a variable that is equal to our variable above. Then we use the map() method to create a new array of the spereated characters while not manipulating our previous array.*/

      /*We will also be using the ascii table and charCodeAt() method to change our characters from letters to numbers.*/

      /* Here we create a new variable that is set equal to our variable from earlier using the map() method. We create a new array with out manipulating the original.*/

      /*Here we create another variable for that refrences the ascii table. Using charCodeAt()We create an if statement that compares our variable to see if it is shorter than the lower case alphabet or greater than it. After while still in that if statement we use the && operater to state if out variable equals a space*/

      //Then we return a for loop within a for loop. Then we create an if statement stating that if the [i][j] from the two for loops are equal to our new map parameter. We have them add 1 so on our cypher graph the j will move horizontially and the i will move vertically.//

      const message = seperate.map((element) => {
        const asciiIndex = element.charCodeAt(0);
        if ((asciiIndex < 97 || asciiIndex > 122) && asciiIndex != 32) return;
        for (let i = 0; i < cypher.length; i++) {
          for (let j = 0; j < cypher[i].length; j++) {
            if (cypher[i][j] === element) return `${j + 1}${i + 1}`;
            if (element === "i" || element === "j") return "42";
            if (element === " ") return " ";
          }
        }
      });
      //Here we are just joining the split string together.//
      return message.join("");
    }

    //Decoding message. This also allows us to add a space in the message.//
    let message = "";
    for (let i = 0; i < seperate.length; i += 2) {
      if (seperate[i] === " ") {
        message += " ";
        i--;
        continue;
      }
      //This is for the incorrect/invalid amount of characters//
      if (!seperate[i + 1]) return false;
      message += cypher[seperate[i + 1] - 1][seperate[i] - 1];
    }
    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
