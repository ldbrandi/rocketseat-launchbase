const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (card of cards) {
    const courseId = card.getAttribute('id')
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active', 'maximized')
    modalOverlay.querySelector('iframe').src = ''
})

document.querySelector('.full-modal').addEventListener('click', function(){
    if (modalOverlay.classList.contains('maximized')){
        modalOverlay.classList.remove('maximized')
    } else {
        modalOverlay.classList.add('maximized')   
    }
})