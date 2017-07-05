/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```
  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

const letterCount = function (string) {
  string = string.toLowerCase();
  let letterFrequencies = {};
  let characters = string.split('').filter(function (character) {
    return /[a-zA-Z]/.test(character)
    // i know we didn't learn regex, but not sure how else to do
  });
  characters.forEach(function (character) {
    if (letterFrequencies[character]) {
      letterFrequencies[character] = letterFrequencies[character] + 1 / characters.length;  //increment count
    } else {
      letterFrequencies[character] = 1 / characters.length;
    }
  });
  
  return letterFrequencies;
};

console.log(letterCount('apple'));
