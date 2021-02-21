const nb_year = (p0, percent , aug , population) => {
    let current = p0;
    let count = 0;
    while (current < population) {
        current = current + current*percent/100 + aug ;
        count++;
    }
    return count;
}

console.log(nb_year(1500,5,100,5000));
console.log(nb_year(1500000,2.5,10000,2000000));