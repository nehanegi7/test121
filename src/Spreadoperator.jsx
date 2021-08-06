
import React from "react";


// concatenate 1st case
const firstname = ["neha"]
const lastname = ["negi"]


const fullname = [...firstname, ...lastname];
console.log(fullname);
console.log(firstname);
console.log(lastname);

//concatenate 2nd case
const name = ["neha negi"];
const biodata = [...name, "23", "Girl", "Cse"];
const intro = ["WELCOME TO FAIRY TALES WORLD", ...biodata]
console.log(intro);

// 3rd case (Remaining Case & Last Case)
var Places = ['Maldives', 'Newyork', 'Paris', 'Chandigarh', 'Australia']
var [last, ...remaining] = Places;
console.log(remaining);
console.log(last);

//4th case
const fullName = {
  fname: "neha",
  lname: "negi",
};

const personDeatail = {
  RollNo: "7",
  ...fullName,
  age: "23",
  gender: "female",
};
console.log(personDeatail);
export default spreadoperator;