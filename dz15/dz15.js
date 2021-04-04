function* createRange(start = 1, end = Infinity){
    for (let i = start; i < end; i++){
        yield i
    }
}

for (let k of createRange(1, 101)){
    console.log(k)
}

// const range = createRange(1, 6)

// console.log(range.next().value);
// console.log(range.next().value);
// console.log(range.next().value);
// console.log(range.next().value);
// console.log(range.next().value);
// //console.log(range.next().value);
