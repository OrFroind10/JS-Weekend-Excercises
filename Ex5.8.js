const shortestWord = (str) => {
    let myArr = str.split(" ");
    for(let i=0 ; i<myArr.length ; i++ ){
         myArr[i] = myArr[i].length;
    }
   console.log(Math.max(...myArr));
}
shortestWord('blah bla bl b');
