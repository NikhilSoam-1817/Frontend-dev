"use strict";
// Q7 – Smart Calculator
class InvalidOperationError extends Error{}
class MathDomainError extends Error{}

const num1=25, num2=0;

(function(op){
  try{
    switch(op){
      case "add": console.log(num1+num2); break;
      case "subtract": console.log(num1-num2); break;
      case "divide":
        if(num2===0) throw new MathDomainError("Divide by zero");
        console.log(num1/num2); break;
      case "power": console.log(num1**num2); break;
      case "root":
        if(num1<0) throw new MathDomainError("Negative root");
        console.log(Math.sqrt(num1)); break;
      default: throw new InvalidOperationError("Invalid op");
    }
  }catch(e){ console.log("Error:",e.message); }
})("divide");
