// function sockMerchant(n, ar) {
//   let counter = 0;
//   for (var i = 0; i < ar.length; i++) {
//     for (var j = i + 1; j < ar.length; j++) {
//       if (ar[i] === ar[j]) {
//         counter += 1;
//         ar.splice(j, 1);
//         break;
//       }
//     }
//   }
//   return counter;
// }
//
// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

//***********************************************************************//

// function countingValleys(n, s) {
//   let newS = s.split("");
//   let elev = 0;
//   let below = false;
//   let valleys = 0;
//   for (var i = 0; i < newS.length; i++) {
//     elev = newS[i] === "D" ? elev - 1 : elev + 1;
//     if (elev < 0) {
//       below = true;
//     }
//     if (below && elev === 0) {
//       valleys += 1;
//       below = false;
//     }
//   }
//   return valleys;
// }
//
// countingValleys(12, "DDUUDDUDUUUD");

//***********************************************************************//

// function repeatedString(s, n) {
//   let countOfA = 0;
//   let remainder = 0;
//   const numS = s.split("");
//   const repeats = Math.floor(n / numS.length);
//   const leftover = n % numS.length;
//   for (var i = 0; i < numS.length; i++) {
//     if (numS[i] === "a") {
//       countOfA += 1;
//     }
//   }
//   for (var j = 0; j < leftover; j++) {
//     if (numS[j] === "a") {
//       remainder += 1;
//     }
//   }
//
//   let result = countOfA * repeats + remainder;
//   return result;
// }
//
// repeatedString("a", 1000000000000);

//***********************************************************************//

// function jumpingOnClouds(c) {
//   let count = 0;
//   for (var i = 0; i < c.length; i++) {
//     if (c[i + 2] === 0) {
//       i = i + 1;
//       count += 1;
//     } else if (c[i + 1] === 0) {
//       count += 1;
//     } else if (c[i + 1] === undefined) {
//       return count;
//     }
//   }
//   return count;
// }
//
// jumpingOnClouds([0, 0, 0, 0, 1, 0]);

//***********************************************************************//
