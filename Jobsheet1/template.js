let fname = 'Selena';
//declaring variable fname with type let and give it value 'Selena'
let lname = 'Gomez';
//declaring variable lname with type let and give it value 'Gomez'
let age = prompt("Enter Selena Gomez's Age!");
//declaring variable age with type let and give it value from prompt methode after user input the value

//Using the old way
//let result = fname + lname + 'is' + age + 'years old';
//alert(result)

//Using template Strings
let result = `${fname} ${lname} is ${age} years old`;
//declaring variable result with type let and the value is the combination of more than 1 variable
alert(result);
//and show the value of result using alert