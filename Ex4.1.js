const fibonacci = (num) => {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    }
    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }
  
  console.log(fibonacci(13));