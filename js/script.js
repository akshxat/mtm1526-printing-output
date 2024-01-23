let a = 3;
let b = 5;
let c;

let r =
`let a = 3;
let b = 5;
let c;
------------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b = ${a += b}
a -= b = ${a -= b}
a *= b = ${a *= b}
a /= b = ${a /= b}
a %= b = ${a %= b}
a == b = ${a == b}
a != b = ${a != b}
a > b = ${a > b}
a < b = ${a < b}
!a && !c = ${!a && !c}
!a || !c = ${!a || !c}`;

console.log(r);

let first_name = "Akshat";
let last_name = "Bhatnagar";
let email = "bhat0172@algonquinlive.com";
let output;

output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

console.log(output);