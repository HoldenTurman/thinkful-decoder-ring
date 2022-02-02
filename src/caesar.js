// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift = 0, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    //input = "m",",e","s","s","a","g","e";

    const message = input.toLowerCase().split("");

    //Creating if statement that sets encode to false and creates shift number negative to decode message.
    if (!encode) shift = 0 - shift;

    /* Here we create a variable and use the map() method to create a new array of our message variable. Here we create another variable have it equal to our charCodeAt() method to transform the strings to numbers while we shift.*/
    const msg = message.map((index) => {
      let asciiIndex = index.charCodeAt(0) - 97;

      if (asciiIndex < 0 || asciiIndex > 26) {
        return index;
      }

      /* Here we are adding our asciiIndex to our shift value. Then create an if statement stating if our variable is less than 0 we need to add the length of the alphabet to it. After we use our mod to get the division remainder from our variable and 26(length of alphabet). */

      asciiIndex = asciiIndex + shift;
      if (asciiIndex < 0) asciiIndex += 26;
      asciiIndex = asciiIndex % 26;
      console.log(index);

      // Here we return a String.fromCharCode() method with our variable inside to return our message from numbers back into a string.

      asciiIndex += 97;
      return String.fromCharCode(asciiIndex);
    });
    return msg.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
