function basicOp(operation, value1, value2)
{
  if(operation == '+')return value1 + value2;
  if(operation == '-')return value1 - value2;
  if(operation == '*')return value1 * value2;
  if(operation == '/')return value1 / value2;
}
console.log(basicOp('+', 4, 7)) // Output: 11
console.log(basicOp('-', 15, 18)) // Output: -3
console.log(basicOp('*', 5, 5)) // Output: 25
console.log(basicOp('/', 49, 7)) // Output: 7