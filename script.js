import './style.css';

document.addEventListener('DOMContentLoaded', () =>{
    const nav = document.getElementById('category-nav');
    const buttons = nav.querySelectorAll('.category-button');
    const productCards = document.querySelectorAll('.product-card');
    const header = document.getElementById('header');

    const activeClasses = ['bg-[#d05278]', 'text-white', 'shadow-lg'];
    const inactiveClasses = ['text-gray-500', 'bg-white', 'hover:bg-[#d05278]', 'hover:text-white', 'hover:shadow-md'];

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 5){
            header.classList.remove('bg-transparent');
            header.classList.add('bg-[#fcedeae6]', 'backdrop-blur-lg');
        }
        else{
            header.classList.add('bg-transparent');
            header.classList.remove('bg-[#fcedeae6]', 'backdrop-blur-lg');
        }
    });

    function setButtonStyle(clickedButton) {
        buttons.forEach(btn =>{
            btn.classList.remove(...activeClasses);
            btn.classList.add(...inactiveClasses);
        })
        clickedButton.classList.add(...activeClasses);
        clickedButton.classList.remove(...inactiveClasses);
    }

    function filterProducts(filter) {
        productCards.forEach(card => {
            const cardCategory = card.dataset.category;

            const showCategory = filter === 'todos' || filter === cardCategory;

            if (showCategory) {
                card.classList.remove('hidden', 'card-enter');
            }
            else{
                card.classList.add('hidden');
            }
        });
    }

    function handleButtonClick (event) {
        const clickedButton = event.currentTarget;

        setButtonStyle(clickedButton);

        const filter = clickedButton.dataset.filter;
        filterProducts(filter);
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    
    if (buttons.length > 0) {
        setButtonStyle(buttons[0]);
        filterProducts('todos')
    }

    var swiper = new Swiper('.coverflow-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 4,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})