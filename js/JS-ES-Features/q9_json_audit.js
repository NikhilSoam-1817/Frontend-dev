"use strict";
// Q9 – JSON Audit
const rawData=[
 '{"user":"Alex","age":25}',
 '{"id":2}',
 '{invalid}',
 '{"user":"Mina","age":"22"}'
];

(function(){
  const clean=[], errors=[];
  for(let i=0;i<rawData.length;i++){
    try{
      const obj=JSON.parse(rawData[i]);
      if(!("user" in obj)||!("age" in obj)) throw new Error("Missing keys");
      obj.age=Number(obj.age);
      if(Number.isNaN(obj.age)) throw new Error("Invalid age");
      clean.push(obj);
    }catch(e){ errors.push({i,error:e.message}); }
  }
  console.log(clean, errors);
  console.log("Adults:", clean.filter(u=>u.age>=18));
})();
