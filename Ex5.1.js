  
const firstAndLast = (str) => {
    if(str.length>2) {
    let strToArr = str.substring(1,str.length-1);
    return strToArr;
    }         
    else return str;
}

console.log(firstAndLast('OOMGG'));
