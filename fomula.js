

function fib (count){
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
    if(b.toString().length == 1000){
      console.log('F', N, '<==========NUMBER IS============>', b)
      alert('Answer: '+'F'+ N)
      break;
    }
  }
}

fib(5000);
