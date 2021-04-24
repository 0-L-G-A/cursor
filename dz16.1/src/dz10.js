import './styles.css';

const dz10 = () => {


function generateBlocks(){

    for (let i = 0; i < 5; i++) {
        const block = document.createElement('div');
        document.body.append(block);
        block.style.display = 'flex';
        document.body.style.padding = '200px';
       

        for (let j = 0; j < 5; j++) {
            const squareChild = document.createElement('div');
            squareChild.classList.add("color");
            block.insertAdjacentElement('afterbegin', squareChild);
            squareChild.style.width = '50px';
            squareChild.style.height = '50px';
            squareChild.style.backgroundColor = getRandomColor();
        }
    }
}

function getRandomColor(){
    const r = () => {return Math.floor(Math.random()*256)};
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

generateBlocks();

const generateBlocksInterval = function() {
    setInterval(() => {
        const squares = document.querySelectorAll(".color");
        squares.forEach((square) => {square.style.backgroundColor = getRandomColor()})
    }, 1000);
}

generateBlocksInterval();

return "...";

}

export default dz10;