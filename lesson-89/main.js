// const btn = document.querySelector('.btn')

// const text = document.querySelector('.text')

// btn.addEventListener('click', () => {
//     text.classList.toggle('move')
// })


// ===========================================================================


const btn = document.querySelector('.btn')

const text = document.querySelector('.text')

btn.addEventListener('click', () => {
    text.classList.toggle('move')
    if (text.classList.contains('move')) {
        text.textContent = 'Я пашол вправо'
    } else {
        text.innerText = 'Текст'
    }
})



// ===========================================================================