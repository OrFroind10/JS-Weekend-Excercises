  
const findUniq = (arr) => {
    let newArr =  arr.sort((a,b) => a-b);
    return newArr[0]===newArr[1] ? newArr[arr.length - 1] : newArr[0];
}

console.log(findUniq([1,1,1,0,1,1,1,1]));
console.log(findUniq([1,1,1,1,8]));
console.log(findUniq([8,3.856,8,8,8]));
