// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


//confusing topic in javascript 
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

/*
Explanation:

1. Comparison operators (>, <, >=, <=) convert null to the number 0.
   null > 0  -> 0 > 0  -> false
   null >= 0 -> 0 >= 0 -> true

2. The equality operator (==) follows different rules.
   It does NOT convert null to 0.
   Therefore:
   null == 0 -> false


*/
// Confusing comparison with undefined

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined >= 0); // false

/*
Explanation:

1. Comparison operators (>, <, >=, <=) convert undefined to NaN.
   undefined -> NaN

2. Any comparison involving NaN always returns false.
   NaN > 0  -> false
   NaN < 0  -> false
   NaN >= 0 -> false

3. The equality operator (==) does NOT treat undefined as 0.
   Therefore:
   undefined == 0 -> false

4. Special Rule:
   undefined == null -> true
*/
console.log(null>=0);//true
console.log(undefined>=0);//false
//key Takeaway:
//null  -> convert to 0 in comparisons
//undefined  ->convert to NaN in comparison 
//Always prefer === over == in javascript 

// === 

console.log("2" === 2);
console.log(0==false);
console.log(0===false);
