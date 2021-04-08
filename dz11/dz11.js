const keys = Array.from(document.querySelectorAll('.container'));
const audios = Array.from(document.querySelectorAll('audio'));

function playAudioForMouse(event){
    const parent = event.target.closest('div');
    const sound = parent.querySelector('audio')
    const playingSound = [...audios].find(item => !item.paused);
    if(playingSound){
        playingSound.currentTime = 0;
        playingSound.pause()}
    sound.play()
}

function playAudioForKey(event){
    console.log(event)
    if(!event.code){return}
    const parent = document.querySelector('#' + (event.code))
    const sound = parent.querySelector('audio');
    const playingSound = [...audios].find(item => !item.paused);
    if(playingSound){
        playingSound.currentTime = 0;
        playingSound.pause()}
    sound.play()
}

keys.forEach((key) => key.addEventListener('click', playAudioForMouse))
document.addEventListener('keydown', playAudioForKey);

