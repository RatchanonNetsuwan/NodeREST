function simplePair(x , y){
    for (let i = 0; i < x.length; i++) {
        for(let j = i + 1; j < x.length ; j++) {
            if(x[i] * x[j] === y){
            return [x[i] , x[j]];
            }
        }
    }
    return null;
}

console.log(simplePair([1 , 2 , 3], 3));
console.log(simplePair([1 , 2 , 3], 6));
console.log(simplePair([1 , 2 , 3], 9));
