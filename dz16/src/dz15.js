const dz15 = () => {
function* createRange(start = 1, end = Infinity){
    for (let i = start; i < end; i++){
        yield i
    }
}

const range = createRange(1, 6)

console.log(range.next().value);
console.log(range.next().value);
console.log(range.next().value);
console.log(range.next().value);
console.log(range.next().value);
// console.log(range.next().value);
return 'HW 15';
}

export default dz15;