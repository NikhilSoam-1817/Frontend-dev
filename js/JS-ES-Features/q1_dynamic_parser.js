"use strict";
// Q1 – Dynamic Data Parser
const apiData = ["25","true","false","NaN"," ","100px","3.14",null,undefined];

(function(){
  const validNumbers=[], invalidNumbers=[];
  apiData.forEach((raw,i)=>{
    const asString=String(raw);
    const asNumber=Number(raw);
    const asBoolean=Boolean(raw);
    const isValid = typeof asNumber==="number" && !Number.isNaN(asNumber) &&
                    !(typeof raw==="string" && raw.trim()==="") &&
                    !(typeof raw==="string" && /[a-zA-Z]/.test(raw));
    if(isValid) validNumbers.push(asNumber);
    else invalidNumbers.push({i,raw,asNumber});
    console.log(i, raw, asNumber, asBoolean, asString, isValid?"VALID":"INVALID");
  });
  console.log(validNumbers, invalidNumbers);
})();
