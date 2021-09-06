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
splitN(100)