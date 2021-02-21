const  peopleOnTheBus  = (arr) => {
    let pass = 0;
    for (const stop of arr) {
      pass = pass + stop[0] - stop[1];
     }
    console.log(pass);
}


peopleOnTheBus ([
    [0,2],
    [3,1],
    [8,5],
    [3,0],
    [2,3],
    [5,9],
    [2,1],
    [3,0]
]
);