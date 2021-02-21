const tribonacci = (signature, num) => {

    if (num === 0) {
      return [];
    } else if (num < 3) { 
      return signature.slice(0, num);
    }
    let tribo = signature;
    for (let i = 3; i < num; i++) {
      tribo.push(tribo[i - 1] + tribo[i - 2] + tribo[i - 3]);
    }
    return tribo;
  }
  
  console.log(tribonacci([1, 2, 2], 9));