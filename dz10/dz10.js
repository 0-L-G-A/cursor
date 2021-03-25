let row = `<div class="row" id="row"></div>`
let square = `<div class="square" id="square"></div>`

function generateBlocks(){
    let wrapper = document.getElementById("wrapper");  
    for (let i = 0; i < 5; i++) {
        wrapper.insertAdjacentHTML('beforeend', row);
        let genRow = document.getElementById("row")
        genRow.id = "row" + i;

        for (let j = 0; j < 5; j++) {
            genRow.insertAdjacentHTML('beforeend', square);
            let genSq = document.getElementById("square")
            genSq.id = "square" + j;
            genSq.style.backgroundColor = getRandomColor();
        }
    }
}

function getRandomColor(){
    const r = () => {return Math.floor(Math.random()*256)};
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

//generateBlocks();

const generateBlocksInterval = function() {
    setInterval(() => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {square.style.backgroundColor = getRandomColor()})
    }, 1000);
}

//generateBlocksInterval();

//setTimeout(() => { clearInterval(generateBlocksInterval); alert('stop'); }, 20000);