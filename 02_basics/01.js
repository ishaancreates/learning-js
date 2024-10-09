// Array

const myArr = [0,1,2,3,4,5];
const myHeroes = ["deadpool","woolverine"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])

// methods

 myArr.push(6);
 myArr.push(8);
 myArr.pop()// Removes the last element from an array and returns it.
 //If the array is empty,undefined is returned and the array is not modified.
 

 myArr.unshift(21);
// Inserts new elements at the start of an array
myArr.shift() 
//Removes the first element from an array and returns it.
 console.log(myArr)

 console.log(myArr.includes(9));
 console.log(myArr.indexOf(19));

const newArr = myArr.join() // stores myArr elements as string in newArr

console.log( newArr) // typeof gives String
console.log( myArr) // typeof gives Object

// Slice , spice 

console.log("A" , myArr )

const myn1= myArr.slice(1,3) // makes a new array of index 1 and 2 of myArr

console.log(myn1)

const myn2 = myArr.splice(1,3) // takes out index 1 2 and 3 from myArr and puts it in new array

console.log(myn2)
console.log(myArr)


