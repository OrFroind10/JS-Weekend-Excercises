/*Ex2.2 - One and Zero - Binary
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/

const binaryOne = (array) => {
    //5232= 5*1000 2*100 + 3*10 + 2*1
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
sum += Math.pow(array[index],index)

    }
    return sum
}
const ddc = [5, 2, 3, 2] ;

console.log(binaryOne(ddc))





