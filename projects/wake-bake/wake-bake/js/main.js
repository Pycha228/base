(function () {
    
    document.addEventListener('click', burgerInit)


    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
}) ()

// const burger = document.querySelector('.burger-icon')
// const menu = document.querySelector('.body')
// const nav  = document.querySelectorAll('.nav__link')
// // const cross = document.querySelector('.burger__icon')
// const body = document.body

// burger.addEventListener('click', () => {
//     menu.classList.toggle('body--opened-menu')
// })



// nav.addEventListener('click', () => {
//     menu.classList.remove('body--opened-menu')
// })

