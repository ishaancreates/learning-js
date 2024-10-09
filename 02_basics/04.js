// objects continued 

// const tinderUser = new Objects() //singleton object
const tinderUser = {} // non singleton object

tinderUser.id= "123qwe";
tinderUser.name = "Ishaan"
tinderUser.isLoggedIn = false


 // console.log(tinderUser);

 const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullName : {
            firstName : "ishaan",
            lastName : "pandey"
        }
    }
 }
 console.log(regularUser.fullname.userfullName.firstName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj4 = { 5: "a", 6: "b"} 
// const obj3 = { obj1,obj2}

const obj3 = Object.assign ({}, obj1 , obj2,obj4)
// {} lagane se saari values new array me chali jayengi 
// {} bina isko lagaye saari values obj1 me chli jayengi 

console.log(obj3)

const users = [
   {
     id: 1,
    email: "ishaan@mail.com"
   },
   {
     id: 1,
    email: "ishaan@mail.com"
   },
   {
     id: 1,
    email: "ishaan@mail.com"
   },
   {
     id: 1,
    email: "ishaan@mail.com"
   },
   {
     id: 1,
    email: "ishaan@mail.com"
   },


]
users[1].email 
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
  coursename: "js in hindi ",
  price: "999",
  courseInstructor : "Hitesh"
}

// courseInstructor can be called in two ways 
// course.courseInstructor
// or 

const {courseInstructor} = course 

// ab console me ab course. krk ni likhna padega 
 console.log(courseInstructor);


 const {courseInstructor: instructor } = course 
 // an console me kewl instructor likhna pdega couseIntructor ki jagah




