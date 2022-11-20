// add loaded class to body
window.addEventListener('load', () => { document.body.classList.add('loaded'); })

/****************************************
custom scrollbar
****************************************/
let scrollbar = OverlayScrollbars(document.querySelector('body'), {
    overflowBehavior : {
        x : "hidden",
        y : "scroll"
    },
    callbacks: {
        onScroll: () => {
            const scroll_position = scrollbar.scroll().position.y;
            const navigation = document.querySelector('.navigation');

            if (typeof(navigation) === 'undefined' || navigation === null) return;

            if (window.innerHeight > 991 && scroll_position > 0)  {
                navigation.classList.add('scrolled');
            } else if (window.innerHeight < 991 && scroll_position > 0)  {
                navigation.classList.add('scrolled');
            }
            else {
                navigation.classList.remove('scrolled');
            }
        }
    }
})

/****************************************
testimonial slider
****************************************/
let testimonial_slider = new Swiper('.testimonial-slider .swiper-container', {
    pagination: {
        el: '.testimonial-slider-pagination',
        type: 'bullets',
        clickable: true
    }
});

/****************************************
related posts slider
****************************************/
let related_posts_slider = new Swiper('.related-posts-slider .swiper-container', {
    breakpoints: {
        0: {
            slidesPerView: 1.8,
            centeredSlides: true,
            initialSlide: 1,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2.5,
            centeredSlides: true,
            initialSlide: 1,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    pagination: {
        el: '.related-posts-slider-pagination',
        type: 'bullets',
        clickable: true
    }
});

/****************************************
screens slider
****************************************/
let screen_slider = new Swiper('.screen-slider .swiper-container', {
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            centeredSlides: true,
            initialSlide: 1,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2.5,
            centeredSlides: true,
            initialSlide: 1,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 5,
        }
    }
});

/****************************************
pricing slider
****************************************/
let pricing_slider = new Swiper('.pricing-slider .swiper-container', {
    breakpoints: {
        0: {
            enabled: true,
            slidesPerView: 1.5,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1
        },
        992: {
            enabled: false,
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false
        }
    }
});

/****************************************
top button
****************************************/
document.querySelector('.button-top').addEventListener('click', (e) => {
    e.preventDefault();

    scrollbar.scroll(0, 1500);
});

/****************************************
top button
****************************************/

document.querySelectorAll('.scroll-button').forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href');
        const item = document.querySelector(id);
        if (item !== null && item !== undefined) {
            scrollbar.scroll(item, 1500);
        }
    });
});

/****************************************
lightbox
****************************************/
const lightbox = GLightbox();

/****************************************
navigation
****************************************/

const navigation_responsive = () => {
    const width = window.innerWidth;
    const navigation = document.querySelector('.navigation');

    if (typeof(navigation) === 'undefined' || navigation === null) return;

    if (width < 992) {
        navigation.classList.add('responsive');
    } else {
        navigation.classList.remove('responsive');
    }
};

window.addEventListener('resize', navigation_responsive);
window.addEventListener('load', navigation_responsive);

// display navigation on mobile
const navigation = document.querySelector('.navigation-bar');

if (typeof(navigation) !== 'undefined' && navigation !== null) {
    document.querySelector('.navigation-bar').addEventListener('click', (e) => {
        document.querySelector('.navigation').classList.add('shown');
    });
}

const getHeight = (el) => {
    var el_style      = window.getComputedStyle(el),
        el_display    = el_style.display,
        el_position   = el_style.position,
        el_visibility = el_style.visibility,
        el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

        wanted_height = 0;


    // if its not hidden we just return normal height
    if(el_display !== 'none' && el_max_height !== '0') {
        return el.offsetHeight;
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position   = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display    = 'block';

    wanted_height     = el.offsetHeight;

    // reverting to the original values
    el.style.display    = el_display;
    el.style.position   = el_position;
    el.style.visibility = el_visibility;

    return wanted_height;
},


toggleSlide = (el, display = 'block') => {
    var el_max_height = 0;

    if(el.getAttribute('data-max-height')) {
        // we've already used this before, so everything is setup
        if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
            el.style.maxHeight = el.getAttribute('data-max-height');
        } else {
            el.style.maxHeight = '0';
        }
    } else {
        el_max_height                  = getHeight(el) + 'px';
        el.style['transition']         = 'max-height 0.5s ease-in-out';
        el.style.overflowY             = 'hidden';
        el.style.maxHeight             = '0';
        el.setAttribute('data-max-height', el_max_height);
        el.style.display               = display;

        // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
        setTimeout(function() {
            el.style.maxHeight = el_max_height;
        }, 10);
    }
};

Array.from(document.querySelectorAll('.has-child')).forEach((element, index) => {
    element.addEventListener('click', (e) => {

        if (window.innerWidth > 992) return;

        if (e.target.parentElement.parentElement.classList.contains('has-child') || e.target.parentElement.parentElement.classList.contains('parent')) {
            e.preventDefault();
        }

        console.log(e.target.parentElement.parentElement)

        if (e.currentTarget.classList.contains('dropped')) {
            toggleSlide(e.currentTarget.querySelector('.child'));
            e.currentTarget.classList.remove('dropped');
            return;
        }

        // hide dropdown for other list items
        Array.from(e.currentTarget.parentElement.querySelectorAll('.has-child.dropped')).forEach((e, i) => {
            e.classList.remove('dropped');
            toggleSlide(e.querySelector('.child'));

        });

        e.currentTarget.classList.add('dropped');

        toggleSlide(e.currentTarget.querySelector('.child'))
    
    });
});

// hide navigation on mobile
const close_button = document.querySelector('.close-button');

if (typeof(close_button) != 'undefined' && close_button != null) {
    close_button.addEventListener('click', (e) => {
        const dropped = document.querySelector('.dropped');
    
        if (typeof(dropped) == 'undefined' && dropped == null) {
            toggleSlide(dropped.querySelector('.child'));
            dropped.classList.remove('dropped');
        }
    
        document.querySelector('.navigation').classList.remove('shown');
    });
}