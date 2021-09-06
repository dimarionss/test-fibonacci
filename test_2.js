function splitN(n) {
  let nbr = new Array(n + 1).fill(0);
  nbr[0] = 1;
  let count = 0;
  while (count <= n) {
    count += 1
    for (let i = count; i <= n; i++) {
      nbr[i] += nbr[i - count];
      
    }
  }
  alert("How many ways exist to reach a sum of 100 using 2 or more positive integers?" + " " + "Answer: " + nbr[nbr.length - 1])
}


// function waysFounder(val) {

//   let ways = new Array(val + 1).fill(0);
//       ways[0] = 1;
//   for (let i = 1; i <= val - 1; i++) {
//       for (let j = i; j <= val; j++) {
//           ways[j] += ways[j - i];
//       }
//   }
//   return ways[ways.length - 1]
// }

splitN(100)