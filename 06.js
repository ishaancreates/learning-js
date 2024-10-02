// STACK AND HEAP MEMORIES 

// stack (primitive )  , heap (non-Primitive)

let myYoutubeName = "IShaan.com"

let AnotherName = myYoutubeName
AnotherName= "kuchBhi.com"
// ye sab stack me jayega kyuki ye primitive hai 
// stack me copy of original jaata 

console.log(AnotherName)
console.log(myYoutubeName)

let userOne = {
    email : "kuchbhi@gmail.com"
    // upi : "lorem@ybl"
} 
// ye heap me jayega kyuki ye non primitive h 
// heap me reference jaata copy nahi 

let userTwo = userOne

userTwo.email = "new@gmial.com"


console.log(userOne.email)
console.log(userTwo.email)

