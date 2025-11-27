"use strict";
// Q10 – Nested Hoisting and Closures
function outer(){
  console.log(count);
  var count=5;
  function inner(){
    console.log(count);
    var count=10;
    console.log(count);
  }
  inner();
  console.log(count);
}
outer();

(function(){
  function outer2(){
    console.log(count2);
    var count2=5;
    const innerArrow=()=>console.log(count2);
    innerArrow();
  }
  outer2();
})();
