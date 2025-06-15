Can you write a JavaScript function that checks if a given string is a palindrome?

 Ignore spaces, punctuation, and letter casing.
 Try it yourself before checking the solution below. 

Challenge:
isPalindrome("Racecar")  
isPalindrome("hello")   
isPalindrome("A man a plan a canal Panama") 



solve :
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("Racecar")); // true
