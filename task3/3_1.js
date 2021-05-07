const reverseBits = num => {
    return parseInt(num.toString(2).split('').reverse().join(''), 2);
}

console.log(reverseBits(417)); // 267
console.log(reverseBits(267)); // 417
console.log(reverseBits(0)); // 0
console.log(reverseBits(2017)); // 1087
console.log(reverseBits(1023)); // 1023
console.log(reverseBits(1024)); // 1
console.log(reverseBits(Number.MAX_SAFE_INTEGER)); // in my case 9007199254740991 what's the same