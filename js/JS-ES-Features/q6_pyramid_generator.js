"use strict";
// Q6 – Pyramid Pattern Generator
(function(){
  const limit=Number(process.argv[2])||5;
  for(let i=1;i<=limit;i++){
    let row="";
    for(let j=0;j<i;j++) row+="* ";
    console.log(row.trim());
  }
})();
