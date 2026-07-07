/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


/* 
  line one
  -------------------------------------------------------


  [++a] [+]
  [++a]
  - Value: 11
  - Explain: Pre-increment Operator
  [+]
  - Explain: Addition Operator

===============================================

  [+b++] [+]
  [+b++]
  - Value: 20
  - Explain: Unary Plus Operator & Post-increment Operator
  [+]
  - Explain: Addition Operator

===============================================

  [+c++] [-]
  [+c++]
  - Value: 80
  - Explain: Unary Plus Operator & Post-increment Operator
  [-]
  - Explain: Subtraction Operator

===============================================

  [+a++]
  [+a++]
  - Value: 11
  - Explain: Unary Plus Operator & Post-increment Operator

===============================================

lineRusult : 11 + 20 + 80 - 11 = 100

*/





/* line two
  -------------------------------------------------------


  [++a] [+]
  [++a]
  - Value: 13
  - Explain: Pre-increment Operator
  [+]
  - Explain: Addition Operator

===============================================

  [-b] [+]
  [-b]
  - Value: -21
  - Explain: Unary Negation Operator
  [+]
  - Explain: Addition Operator

===============================================

  [+c++] [-]
  [+c++]
  - Value: 81
  - Explain: Unary Plus Operator & Post-increment Operator
  [-]
  - Explain: Subtraction Operator

===============================================

  [-a++] [+]
  [-a++]
  - Value: -13
  - Explain: Unary Negation Operator & Post-increment Operator
  [+]
  - Explain: Addition Operator

===============================================

  [+a]
  [+a]
  - Value: 14
  - Explain: Unary Plus Operator

===============================================

lineRusult : 13 + -21 + 81 - -13 + 14 = 100

*/





/* line three
  -------------------------------------------------------


  [--c] [+]
  [--c]
  - Value: 81
  - Explain: Pre-decrement Operator
  [+]
  - Explain: Addition Operator

===============================================

  [+b] [+]
  [+b]
  - Value: 21
  - Explain: Unary Plus Operator
  [+]
  - Explain: Addition Operator

===============================================

  [--a] [*]
  [--a]
  - Value: 13
  - Explain: Pre-decrement Operator
  [*]
  - Explain: Multiplication Operator

===============================================

  [+b++] [-]
  [+b++]
  - Value: 21
  - Explain: Unary Plus Operator & Post-increment Operator
  [-]
  - Explain: Subtraction Operator

===============================================

  [+b] [*]
  [+b]
  - Value: 22
  - Explain: Unary Plus Operator
  [*]
  - Explain: Multiplication Operator

===============================================

  [a] [+]
  [a]
  - Value: 13
  - Explain: Variable Value
  [+]
  - Explain: Addition Operator

===============================================

  [--a] [-]
  [--a]
  - Value: 12
  - Explain: Pre-decrement Operator
  [-]
  - Explain: Subtraction Operator

===============================================

  [+true]
  [+true]
  - Value: 1
  - Explain: Unary Plus Operator (Converts boolean to number)

===============================================

lineRusult : 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100

*/



// ==============================================================================================
// ==============================================================================================



/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++e * ++g + ++f); // 173                      // The easy solution
console.log(-d * e.length - f + --(String(g).length)); // 173  // The hardest solution, and it might not work on some versions of Node and older browsers

