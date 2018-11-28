var play = document.querySelector('#play')

play.addEventListener('click', function(){
    toggleClass(play, 'play')
    toggleClass(play, 'pause')
})


var toggleClass = function (element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}