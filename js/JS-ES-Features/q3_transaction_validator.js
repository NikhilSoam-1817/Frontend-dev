"use strict";
// Q3 – Transaction Validator
class TransactionError extends Error{}
class NegativeAmountError extends TransactionError{}
class MissingFieldError extends TransactionError{}
class NullEntryError extends TransactionError{}

const transactions=[
 {id:1,amount:2000},
 {id:2,amount:-500},
 {id:3},
 null
];

(function(){
  const valid=[], invalid=[];
  for(let i=0;i<transactions.length;i++){
    try{
      const tx=transactions[i];
      if(tx===null) throw new NullEntryError("Null entry");
      if(!("id" in tx)||!("amount" in tx)) throw new MissingFieldError("Missing fields");
      if(tx.amount<0) throw new NegativeAmountError("Negative amount");
      valid.push(tx);
    }catch(e){ invalid.push({i,error:e.message}); }
  }
  console.log(valid, invalid);
})();
