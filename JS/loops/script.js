const start = 1;
const end = 10;
let result = 0;

for (let i = 1;i >= start && i <= end; i++) {
    if (i % 5 === 0) {
        (start);
    } else if (i % 2 === 0 && i % 4 !== 0) {
        console.log((result += i));
    } else if (i % 3 === 0) {
        result -= i;
    } else if (i % 4 === 0) {
        result *= i;
    } 
}

console.log(result);



// console.log(result);

// let sum = 0;
// let div = (sum - sum % 1234) / 1234;
// let mod = sum % 1234;
// for (let i = 1; i <= 1000; i++) {
//   sum += i;

// }

// let result = (div > mod) ? true : false;
// console.log(result);

// let sum = 0;
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 === 1) { 
//     sum += i;
//     console.log("Found");
//   }

// }
//   if (sum * 5 > 5000) {
//       console.log('Bigger');
//   } else {
//       console.log('Smaller or equal');
//   }
  

