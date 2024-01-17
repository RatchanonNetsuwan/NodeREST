function highestDigit(num) {
    let highest = 0;
    let text = num.toString();

    for(let i = 0; i < text.length; i++){
        let digit = parseInt(text[i]);
        if(digit > highest){
            highest = digit;
        }
    }

    return highest;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));