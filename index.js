function reverse(word){
  //const wordArray = word.split("")
  //const reversedWordArray = wordArray.reverse();
  //const reversedWord = reversedWordArray.join("")
  //return  reversedWord;
  return word.split("").reverse().join("")
}



function isPalindrome(word) {
  const reversedWord= reverse(word)
    return word=== reversedWord
  }


/* 
  Add your pseudocode here
  THE Word is the same as the reverse of the same  word
  reverse the input string 

  if the input string  is the same as the reversed input 
  return true
  else 
  false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
