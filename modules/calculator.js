 const addition = require("./addition");
/*
 var cal = (x, y,cb) => {
     console.log("2 no's: "+x+" "+y);
     addition.add(x, y, (res) => {
         console.log("res is: "+res);
         cb(res);
     })
 }*/

 /**
  * Now we will use the same add function but we will define inputs
  * As we can see in the terminal the value of x, y is not printed as it is mocked
  */

 var cal = (x, y,cb) => {
    console.log("Two numbers: "+x+ " " +y);
    if(x<0){
        throw new Error ("No cannot be less than 0");
    }
    addition.add(x,y,(res) => {
        console.log("res: " + res);
        
        addition.add(y,res, (response) => {
            console.log("Response: " + response);
            cb(response);
        })
    })
  }



exports.cal = cal;