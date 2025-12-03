//Datatypes and ECMA
// Part 01: //
"use strict";//  treats all JS code as newer version

//alert(3+3) the syntax is invalid for IDE but if you are using browser in console mode then it will work

//code readability is having the highest priority

//ECMA is for standard for JS and MDN can also be used as reference

let name="Optimus Max"
let age=11
let loss=false

/*Datatypes:
number 2^53
bigint
string=> ""
bool = true/false
null=>standalone value
undefined

The difference between the null and undefined is that in undefined the value is not assigned whereas in null the value of the varible is null

symbol(mostly used in reactjs) is used for define uniqueness

objects

typeof is a method which is used for know the datatype of the varible

Interserting thing is that the typeof null is object it is said that this the error of the lang; typeof undefined is undefined

*/


// Part 02:  //
//       Conversion of datatypes        //

let score=33
console.log(score)
console.log(typeof score)

let scores="33"
console.log(scores)
console.log(typeof scores)
let convert=Number(scores)  //you change the datatype typecasting it to required datatype but that datatype should have its first letter in capital i.e NUmber not number or String not string
console.log(typeof convert)
console.log(convert)

let s="33abc"
console.log(s)
console.log(typeof s)
let conv=Number(s)
console.log(typeof conv)
console.log(conv)// NaN stands for Not a Number as s=33abc as a string 33 can be converted into number but abc can't so at the end of the execution the output generated is NaN.

let a=null
console.log(a)//gives output as 0
let b=undefined
console.log(b)// gives output as NaN

//console.log for bool varible is 1 for true value and 0 for false

let n="Max"
let ns=Number(n)
console.log([n, typeof n])
console.log([ns, typeof ns])

let isLoggedIn=1
let boolisLoggesIn=Boolean(isLoggedIn)
console.log([isLoggedIn,typeof isLoggedIn, boolisLoggesIn, typeof boolisLoggesIn])
//For number datatype is the value is 1 or greater than 1 then it is always true and when it is 0 then it returns false
//If the varible is having empty string then after conversion it return false and if the string is present then it returns true value

let num=33
let NegValue= -33
let Strnum=String(num)
console.log([num, typeof num, Strnum, typeof Strnum])

//  Part 03  //
// Operations //
// All the operations are just like in any other language +,-,/,*,%,**(Power); two add teo strings we use + operator
//interesting thing is below

console.log("1"+2) //output is 12
console.log(1+"2")//output is 12
console.log("1"+2+2)// output is 122
console.log(1+2+"2")//output is 32

// in 4th case it will first add the numbers and the it will then add to string addition format bcz at last string is present

console.log(+true)//this method converts bool in number
console.log(+true + 2)//converts into number and then adds them
console.log(+"")//converts string into number

