const dz11 = () => {

// const keys = Array.from(document.querySelectorAll('.container'));
// const audios = Array.from(document.querySelectorAll('audio'));

const HWD = [
    {
        imgPath: './assets/img/ocean.jpg',
        altPath: 'ocean',
        key: 'A',
    },
    {
        imgPath: './assets/img/night.jpg',
        altPath: 'night',
        key: 'S',
    },
    {
        imgPath: './assets/img/cat.jpg',
        altPath: 'cat',
        key: 'D',
    },
    {
        imgPath: './assets/img/rain.jpg',
        altPath: 'rain',
        key: 'F',
    },
    {
        imgPath: './assets/img/winter.jpg',
        altPath: 'winter',
        key: 'G',
    },
    {
        imgPath: './assets/img/forest.jpg',
        altPath: 'forest',
        key: 'H',
    },
    {
        imgPath: './assets/img/stream.jpg',
        altPath: 'srteam',
        key: 'J',
    }
]

function createInterface(){
    const mainContainer = document.createElement('div');
    mainContainer.className="main-container11";
    document.body.append(mainContainer);

    HWD.forEach(element => {
        const container = document.createElement('div');
        container.className="container11";
        // container.style.background = "url (" + element.imgPath + ") center";
        mainContainer.append(container);

        const image = document.createElement('img');
        image.src = element.imgPath;
        image.alt = element.altPath;
        container.append(image);

        const kbd = document.createElement('kbd');
        kbd.className = "btn11";
        kbd.innerHTML = element.key;
        container.append(kbd);
    })


    
}

createInterface();



// function playAudioForMouse(event){
//     const parent = event.target.closest('div');
//     const sound = parent.querySelector('audio')
//     const playingSound = [...audios].find(item => !item.paused);
//     if(playingSound){
//         playingSound.currentTime = 0;
//         playingSound.pause()}
//     sound.play()
// }

// function playAudioForKey(event){
//     console.log(event)
//     if(!event.code){return}
//     const parent = document.querySelector('#' + (event.code))
//     const sound = parent.querySelector('audio');
//     const playingSound = [...audios].find(item => !item.paused);
//     if(playingSound){
//         playingSound.currentTime = 0;
//         playingSound.pause()}
//     sound.play()
// }

// keys.forEach((key) => key.addEventListener('click', playAudioForMouse))
// document.addEventListener('keydown', playAudioForKey);
return "...";
}

export default dz11;
