const player = document.querySelector('.player') //entire player div
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress_filled')
const toggle = player.querySelector('toggle') //toggle the play and stop option
const sliders = player.querySelectorAll('.player__slider')
const skip = player.querySelectorAll('[data-skip]')