const getUniqueWords = str => {
    return str.split(' ').filter((el, id, arr) => {
        return arr.indexOf(el) === id;
    }).join(' ');
}

console.log(getUniqueWords('easy come easy go')); // easy come go
console.log(getUniqueWords('first things first')); // first things
console.log(getUniqueWords('')); // ''


