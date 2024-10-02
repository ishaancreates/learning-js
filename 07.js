const name = "Ishaan"
const repoCount = 50

console.log(name + repoCount + "value")
// this is outdated

console.log(`helly my name is ${name}`)

const gameName = new String ('hey-hello')
/* 
String {'hey'}
0: "h"
1: "e"
2: "y"
length: 3 */
console.log (gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase()); // does not change the original string
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

const newString = gameName.substring (0,4) // yaha pe negative values ni le skte 
 // does not take the index 4
console.log(newString)

const anotherString = gameName.slice (0,4)
console.log(anotherString)
/* JavaScript substring() different results of substring()

If start > stop, then the function swaps both arguments.
If any argument is negative or is NaN, it is treated as 0.




JavaScript slice() different results of slice()

If start > stop, This function will return an empty string. (“”)
If the start is negative, It sets char from the end of the string, like substr().
If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)
 */

// trim() it is used to remove blank spaces

const url = " https://google.com/ishan%20pandey"

console.log(url.replace('%20', '-'))
 
console.log(url.includes('sundar'))

console.log(gameName.split('-'))