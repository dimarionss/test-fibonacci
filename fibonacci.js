function fib (count, current_value){
  var N = 0;
  while (N <= count) {
    N += 1;
    var a = 1n,
      b = 1n
    for (i = 3; i <= N; i++) {
      let sum = a + b;
      a = b;
      b = sum;
    }
    if(b.toString().length == current_value){
      console.log('F', N, '<==========NUMBER IS============>', b)
      alert("What index yields the 1st term to contain a 1,000 digit sum?" + " " + 'Answer: '+'F'+ N)
      break;
    }
  }
}

fib(5000, 1000);
