//without arrow
//const func = function(a,b){ return a+ b;}
//alert(funct(3,3));

//below is how to write the function using arrow
const func = (a,b) => {
    //declaring variable func with type const and give it value berupa function
    //and the function has 2 parameter a and b, that will be sum and returned
    return a + b;
};
alert(func(8,3));
//show the value of the result using function with parameter value 8 as a and 3 as b