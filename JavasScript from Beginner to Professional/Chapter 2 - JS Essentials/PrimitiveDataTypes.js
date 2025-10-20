console.log("**** VARIABLES ****");

let firstname = "Bernardo";
let x = 2;

console.log("Variables can be assigned a new value while the code is running");
firstname = "Diogo";
x = 7;

console.log("Declaring variables");
console.log("let");

console.log("var");
console.log("const");

let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);


console.log("****TYPEOF****");
testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

console.log("****CONVERTING DATA TYPES****");
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNum = "12";
strToNum = Number(strToNum);
console.log(strToNum, typeof strToNum);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

console.log("****Not Obvious Convertions****");
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log(nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);
