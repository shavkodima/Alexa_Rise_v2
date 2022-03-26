const scroll = ()=>{
    const header = document.querySelector('header');
    const section = document.querySelectorAll('section.scroll')
    const navigationLink = document.querySelectorAll('.navigation__list li a')

    const scrollToElem = (e)=>{
        e.preventDefault()
        const nav = document.querySelector('.navigation')
        const link = e.target.getAttribute('href').replace('#', '')
        document.querySelector(`.${link}`).scrollIntoView({behavior:'smooth'})
        nav.classList.remove('activ')
    }

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                navigationLink.forEach((elem)=>{
                    elem.classList.remove('activ')
                    const link = elem.getAttribute('href').replace('#', '')
                    const dataEntry = entry.target.getAttribute('data-set');
                    if(link === dataEntry){
                        elem.classList.add('activ')
                    }
                })
            }
        })
    },{
        threshold: 0.25,
    })



    section.forEach(elem=>{
        observer.observe(elem)
    })
    navigationLink.forEach(elem=>{
        elem.addEventListener('click', scrollToElem)
    })

    const scrollIndicator = () =>{
        const scrollIndicatorElem = document.querySelector('.indicator-scroll');
        const clientHeight = document.documentElement.clientHeight;
        const scroll = document.documentElement.scrollTop
        const offsetHeightAll = document.body.offsetHeight - clientHeight;
        const procentScroll = Math.ceil(scroll / offsetHeightAll * 100);
        scrollIndicatorElem.style.cssText = `width:${procentScroll}%`;
    }

    const scrollUp = (e)=>{
        e.preventDefault()
        const wrapper = document.querySelector('.wrapper');
        wrapper.scrollIntoView({behavior:'smooth'})
    }



    window.addEventListener('scroll', (e)=>{
        const btnTop = document.querySelector('.button-top')
        const top = document.documentElement.scrollTop;
       if(top > 300){
            header.classList.add('activ')
            btnTop.classList.add('activ')
            btnTop.addEventListener('click', scrollUp)
       }else{
            header.classList.remove('activ')
            btnTop.classList.remove('activ')

       } 

       top === 0 ? navigationLink[0].classList.remove('activ'):"";
       scrollIndicator()
    })


    



}

export default scroll;