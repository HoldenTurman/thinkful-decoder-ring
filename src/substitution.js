// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    /* We are creating a helper function here. This function will take 3 parameters. We then use the map() method to create a new array with the msg data inside. After we will create a new variable that finds the index of our alpha1 parmeter.*/
    function mapChar(msg, alpha1, alpha2) {
      return msg.map((letter) => {
        const index = alpha1.indexOf(letter);
        if (index === -1) return letter;
        return alpha2[index];
      });
    }

    /* Here we create an if statement that states if alphabet is false or the length is not equal to 26 return false.*/
    if (!alphabet || alphabet.length != 26) return false;

    /* Here we create 3 new variables. One that has the real alphabet as a string in it. The the second one contains the parameter given to us with substitution alphabet and the third takes our parameter with our message in it.*/

    //These 3 variables all get split so each character is a specific string. And two of them also get converted to lower case so we don't have to worry about capitals.//

    const regularAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const newAlpha = alphabet.toLowerCase().split("");
    const msg = input.toLowerCase().split("");

    /*Here we create a for loop within a for loop so we can first loop through our newAlpha[i]length. Then within that for loop we loop through newAlpha[j] length to compare if any duplicate characters are there. After we create an if statement stating if [i] === [j] return false because it found a matching character between the two.*/

    for (let i = 0; i < newAlpha.length; i++) {
      for (let j = i + 1; j < newAlpha.length; j++) {
        if (newAlpha[i] === newAlpha[j]) return false;
      }
    }

    /* Here is encode is true we return our mapChar function. Once for encoding and the other with the switched parameter for decoding to compare the two.*/
    if (encode) return mapChar(msg, regularAlpha, newAlpha).join("");
    return mapChar(msg, newAlpha, regularAlpha).join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
