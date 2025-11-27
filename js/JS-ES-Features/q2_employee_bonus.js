"use strict";
// Q2 – Employee Bonus Calculator
const employees=[
 {name:"Amit",salary:"45000",years:"5"},
 {name:"Sara",salary:"38000",years:"2"},
 {name:"Kiran",salary:"52000",years:"7"},
];

employees.forEach(emp=>{
  try{
    if(!emp.name) throw new Error("Missing name");
    const salary=Number(emp.salary), years=Number(emp.years);
    if(Number.isNaN(salary)||Number.isNaN(years)) throw new Error("Conversion error");
    const bonus = years>3? salary*0.1 : salary*0.05;
    console.log(`${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`);
  }catch(e){ console.log("Error:",e.message); }
});
