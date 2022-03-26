const mobileMenu = ()=>{
    const nav = document.querySelector('.navigation');
    const btnOpen = document.querySelector('.menu-mobile');
    const btnClose = document.querySelector('.close-mobile');

    btnOpen.addEventListener('click', (e)=>{
        nav.classList.add('activ')
        document.body.style.cssText = ' overflow-y: hidden;'
    })

    btnClose.addEventListener('click', (e)=>{
        nav.classList.remove('activ')
        document.body.style.cssText = ''
    })
}

export default mobileMenu;