// const btns = document.querySelectorAll('.btn')

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log(btn.textContent)
//     })
// })

const btns = document.querySelector('.btns')

btns.addEventListener('click', event => {
    const target = event.target

    if(target && target.classList.contains('btn')) {
        console.log(target.textContent)
    }
})