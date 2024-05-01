(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit (e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth > 1100) return

        if(document.body.classList.contains('body--opened-menu')) {
            document.body.classList.remove('body--opened-menu')
        } else {
            document.body.classList.add('body--opened-menu')
        }
    }

    // Studies slider

        new Swiper('.studies__slider', {

            slidesPerView: 1.1,
            spaceBetween: 30,
            loop: true,
            freeMode: true,
            autoplay: {
            delay: 3000,
            speed: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            },
            breakpoints: {
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    576: {
                        slidesPerView: 1.5,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 2.1,
                    },
                    1000: {
                        slidesPerView: 2.7,
                        spaceBetween: 30,
                    },
                    1101: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                
            },
        });


    // Accordion

        const accordionList = document.querySelector('.accordion-list')

        accordionList.addEventListener('click', (e) => {

            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if(!accordionControl) return
            e.preventDefault()

            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if(accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }

            accordionItem.classList.toggle('accordion-list__item--opened')
            
            if(accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
            } else {
                accordionContent.style.maxHeight = null
            }
        })


    // Show more button

    const btn = document.querySelector('.team__button')
    const cards = Array.from(document.querySelectorAll('.team__item'))

    window.addEventListener('resize', e => {
        const target = e.target
        if(target.window.innerWidth > 1200) widthOne()
        if(target.window.innerWidth > 800 && target.window.innerWidth < 1200) widthTwo()
    })

    function openTeamset () {
        btn.addEventListener('click', () => {
            btn.classList.add('hidden')
            cards.forEach(item => item.classList.remove('hidden'))
        })
    }

    function widthOne () {
        if(window.innerWidth > 1200) {
            btn.classList.add('hidden')
        
            cards.forEach((item, index) => {
                item.classList.add('hidden')
                if(index <= 5) {
                    item.classList.remove('hidden')
                } else if (index > 5) {
                    btn.classList.remove('hidden')
                }
                openTeamset()
            })
        }
    }
    widthOne()

    function widthTwo () {
        if(window.innerWidth > 800 && window.innerWidth < 1200) {
            btn.classList.add('hidden')
        
            cards.forEach((item, index) => {
                item.classList.add('hidden')
                if(index <= 3) {
                    item.classList.remove('hidden')
                } else if (index > 3) {
                    btn.classList.remove('hidden')
                }
                openTeamset()
            })
        }
    }
    widthTwo()

    // Testimonials slider

    new Swiper('.testimonials__slider', {
        spaceBetween: 50,
        centeredSlides: true,
        slidesPerView: 2,
        loop: true,
        pagination: {
            el: '.testimonials__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><img src="img/icons/pagination.svg"></span>';
            },
            bulletClass: 'testimonials__bullet',
            bulletActiveClass: 'testimonials__bullet-active',
        },
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
    });

    
    // new Swiper('.testimonials__slider', {
    //     spaceBetween: 50,
    //     centeredSlides: true,
    //     slidesPerView: 1.9,
    //     pagination: {
    //         el: '.testimonials__pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<span class="' + className + '"><img src="../img/icons/pagination.svg"></span>';
    //         },
    //     },
    //     navigation: {
    //         nextEl: '.testimonials__next',
    //         prevEl: '.testimonials__prev',
    //     },
    // });
    

})()













































// (function () {

//     document.addEventListener('click', burgerInit)

//     function burgerInit(e) {

//         const burgerIcon = e.target.closest('.burger-icon')
//         const burgerNavLink = e.target.closest('.nav__link')
//         if(!burgerIcon && !burgerNavLink) return
        
//         if(!document.body.classList.contains('body--opened-menu')) {
//             document.body.classList.add('body--opened-menu')
//         } else {
//             document.body.classList.remove('body--opened-menu')
//         }

//     }


// })()

// Accordion
// 
// 
// 

// const accordionList = document.querySelector('.accordion-list')
        
        // accordionList.addEventListener('click', e => {

        //     const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        //     const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            
        //     const accordionControl = e.target.closest('.accordion-list__control')
        //     if(!accordionControl) return
        //     e.preventDefault()

        //     const accordionItem = accordionControl.parentElement
        //     const accordionContent = accordionControl.nextElementSibling

        //     if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        //         accordionOpenedItem.classList.remove('accordion-list__item--opened');
        //         accordionOpenedContent.style.maxHeight = null;
        //     }

        //     accordionItem.classList.toggle('accordion-list__item--opened')

        //     if(accordionItem.classList.contains('accordion-list__item--opened')) {
        //         accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
        //     } else {
        //         accordionContent.style.maxHeight = null
        //     }

        // })


// 
// 
// 