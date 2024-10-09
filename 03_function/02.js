function calculateCarPrice( val1 , ...num1) // ...  ka ye mtlb hai ki saari values ko pack krk dedo 

 {
    return num1 
}

console.log(calculateCarPrice(200, 400, 500)) 
// Array bana ke print krega

const user = {
    username: "ishaan",
    price:  922

}

function handleObject (anyobject) {
    console.log (`Username is ${anyobject.username} and price  is ${anyobject.price}`)

}

handleObject(user) // this is OBJECT BANA KE VALUE PASS KRNA 

handleObject({
    username:"marshal mathers"

})
const myNewArray = [200,322,203]

function RSM (getArray){
    return getArray[1]

}
 console.log(RSM (myNewArray))
 console.log (RSM ([200,322,2,212,212,31,2,3,1]))


