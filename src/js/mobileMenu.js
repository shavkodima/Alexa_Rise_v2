const mobileMenu = ()=>{
    const nav = document.querySelector('.navigation');
    const btnOpen = document.querySelector('.menu-mobile');
    const btnClose = document.querySelector('.close-mobile');

    btnOpen.addEventListener('click', (e)=>{
        nav.classList.add('activ')
    })

    btnClose.addEventListener('click', (e)=>{
        nav.classList.remove('activ')
    })
}

export default mobileMenu;