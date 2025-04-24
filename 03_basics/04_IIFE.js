// IIFE : Immediately Invoked Funtion Expression 

//why 
//we want function that remain unpollutant from global scope and get execute immidiatelly

//example chai() --function call means chai is function and "()" paranthisis for call 

//syntax of IIFE () ();

(function chai (){
    console.log("DataBase Connected")
}) (); //funtion calling itself 

// ****************Important***************//
//IIFE function must need to end with semicolon otherwise other upcoming function will not execute 

//another way , through arrow functions
(() => {
    //unnamed IIFE
    console.log(" Another DataBase Connected..")
}) ();

//semicolon is important


//taking argument 
((name ) => {
    //named IIFE 
    console.log(`${name} writing this code`)
}) ('Harshit');
