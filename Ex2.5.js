function numberSum(num) {
    var total = 0;
      for(var i = 1; i <= num; i++){
        total += i;
      }
      return total;
      
  }
  console.log(numberSum(8))