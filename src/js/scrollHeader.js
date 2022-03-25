const scrollHeader = ()=>{
    const header = document.querySelector('header');
    const section = document.querySelectorAll('section.scroll')
    const navigationLink = document.querySelectorAll('.navigation__list li a')

    const scrollToElem = (e)=>{
        e.preventDefault()
        const link = e.target.getAttribute('href').replace('#', '')
        document.querySelector(`.${link}`).scrollIntoView({behavior:'smooth'})
    }

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                navigationLink.forEach((elem)=>{
                    elem.addEventListener('click', scrollToElem)
                    elem.classList.remove('activ')
                    const link = elem.getAttribute('href').replace('#', '')
                    const dataEntry = entry.target.getAttribute('data-scroll');
                    if(link === dataEntry){
                        elem.classList.add('activ')
                    }
                })
            }
        })
    },{
        threshold: .5,
    })


    section.forEach(elem=>{
        console.log(elem);
        observer.observe(elem)
    })

    navigationLink.forEach(elem=>{
        elem.addEventListener('click', scrollToElem)
    })




    window.addEventListener('scroll', (e)=>{
       const top = document.documentElement.scrollTop;
       top > 300 ? header.classList.add('activ') : header.classList.remove('activ')
       top === 0 ? navigationLink[0].classList.remove('activ'):"";
    })



}

export default scrollHeader;