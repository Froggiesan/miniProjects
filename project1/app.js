const closedFaceM = document.querySelector('.closed');
// we can replace the class selector with id and just change it to a '#'
const openFaceM = document.querySelector('.open');

// Now add event listener

closedFaceM.addEventListener('click',() => {
    if(openFaceM.classList.contains('open')){
        openFaceM.classList.add('active')
        closedFaceM.classList.remove('active')
    }
    
})

openFaceM.addEventListener('click',() => {
    if(closedFaceM.classList.contains('closed')){
        closedFaceM.classList.add('active')
        openFaceM.classList.remove('active')
    }
})