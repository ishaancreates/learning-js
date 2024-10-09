const marvel = ["ironman","spiderman","thor"]
const dc = ["superman","flash","batman"]

// marvel.push(dc);

// console.log(marvel);
// // to print flash
// console.log(marvel[3][1])



const all= marvel.concat(dc)

console.log(all)

// spread operator (...Array): same as concat but this is more famous
const allBySpread = [...marvel,...dc]

const anotherArr= [12,3,1,3,[121,12,21,2],12,31, [131,13,13,[13,13,1,[131,[11]],12]]]
const simplifiedArr = anotherArr.flat(Infinity)

console.log(simplifiedArr)





console.log(Array.isArray("IShaan")) 
console.log(Array.from("Ishaan")) // creates array from string 
console.log(Array.from({name : "ishaan"})) //uskso bolna padega ki uske key are array banaye ya uske value ka 
// agar ni bolenge to empty array dega  

let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3))




