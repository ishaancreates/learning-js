function sayMyName () {
    console.log("i")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
}

// sayMyName () => calling function 

// function addTwoNum (num1 , num2 ) {
//     console.log(num1 + num2);

// }


function addTwoNum(num1, num2)
{
    let result = num1 + num2 ;
    return result ;
    // retrun num1 + num2; can also be used
    console.log("Ishaan") // print ni hoga 
    // kyuki return pe hi function end ho jaata 
}
const result =  addTwoNum(3,null)

console.log ("Result: ", result );
/* when line 9 to 14 is used 
 3
Result:  undefined
 */
 


function loginUserMsg (username) // yhi pe username ki default value de skte 
// function loginUserMsg (username= "SAM") => ab username ki default value SAM hogi
{
    if (!username)  //if (username=undefined ) can  also be written as this 
    {    console.log("Username daal de bhai bakchodi na kr");
        return // it will be used as break statement 
    }
    return `${username }  just logged in `
}
console.log (loginUserMsg("Ishaan "))
console.log (loginUserMsg())

