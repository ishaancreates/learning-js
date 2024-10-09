// // singleton : constructor se banta hai, literals ki tarah se ni banta
// // obejct.create : singleton object

// // object literals

// const mySym = Symbol("key1")

const JsUser = {
    name : "Ishaan",
    "full name" : "ishaan pandey",
    mySym: "mykey1", 
    age: 19,
    location: "sultanpur",
    email : "ishaan@caltech.com",
    isLoggedin: false,
    lastLoginDays : ["monday","saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // cant use . operator coz index is string
// console.log(JsUser[mySym])


// // to overwrite values 
//  JsUser.email = "ishaan@kuchbhi.com"

//  Object.freeze(JsUser)
//  JsUser.email= "ye propogate hi ni hoga"
//  console.log(JsUser)// line 26 wala kewl work krega line 29 wala ni 
 
JsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(JsUser.greeting) // will give [Function (anonymous)]
console.log(JsUser.greeting()) 

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`) //this is used to reference same object 

}

console.log (JsUser.greeting());

console.log (JsUser.greetingTwo());
