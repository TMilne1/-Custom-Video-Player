const player = document.querySelector('.player') //entire player div
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle') //toggle the play and stop option
const sliders = player.querySelectorAll('.player__slider')
const skip = player.querySelectorAll('[data-skip]')

//Play functionality
function play(){
    if (video.paused == true){
    video.play();
    }else{
    video.pause();}

}
function changeIcon(){
    let icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon
}

video.addEventListener('click', play)
video.addEventListener('pause',changeIcon)
video.addEventListener('play', changeIcon)
toggle.addEventListener('click', play) 


//Rewind and Fast Forward
function skipper(){
    let time = this.attributes[0].value
    video.currentTime += parseInt(time);
}

const rewind10 = skip[0];
const fastForward25 = skip[1];

//function rewind(){video.currentTime -=10.0}
rewind10.addEventListener('click',skipper)

//function fastForward() {video.currentTime += 25.0}
fastForward25.addEventListener('click', skipper)


//Volume and Playback speed control
function controls(){
    console.log(this['name'], this['value'])
    let name = this['name']
    let value = this['value']
    video[name] = value;
    console.log(video[name])
}
sliders.forEach(element => {
    element.addEventListener('change', controls)
})
