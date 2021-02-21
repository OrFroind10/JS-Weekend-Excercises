const maskify = (str) => {
    let myArr = str.toString().split("");
    for(let i=myArr.length -5 ; i>=0; i--) {
       myArr[i]="#";
    }
    console.log(myArr.join(""));
}

maskify("4556364607935616");
maskify("64607935616");
maskify("Skippy");
maskify("Nananananananananananananananana Batman!");