// dates and time 
// date is a object in js

 let myDate = new Date ()
 console.log(myDate.toString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toDateString());
 console.log(typeof myDate);

 let myCreatedDate = new Date (2023,0,23) // year month day // months start from 0
 let myCreatedDate1 = new Date (2023,0,23 , 5,3) // 5:03 time bhi add ho jayega
 console.log(myCreatedDate.toDateString());

 let myCreatedDate2 = new Date ("04-10-2024")
 console.log(myCreatedDate2.toLocaleString());

 let myTimeStamp = Date.now()

 console.log(myTimeStamp); // tells mili seconds from 1st jan 1970 of rn 
 console.log(myCreatedDate2.getTime()); // tells mili seconds from 1st jan 1970 of any time 
 console.log(Math.floor(Date.now()/1000)); 

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay() - 1);
 
// ` ${newDare.getDay()} and time `

newDate.toLocaleString('default',
    {
        weekday: "long"
    }
)





