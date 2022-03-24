import '../img/portfolio/autumn/portfolio-img (1).png';

const getPortfolio =()=>{
    const imgSetting  ={
        autumn:{
            count:6,
            path:'autumn'
        },
        spring:{
            count:6,
            path:"spring"
        },
        summer:{
            count:6,
            path:"summer"
        },
        winter:{
            count:6,
            path:"winter"
        }
    }
    
    const navPortfolio = document.querySelectorAll('.button-portfolio');
    const sectionImg = document.querySelector('.portfolio__view')

    
    
    const getPortfolioCategory = (e)=>{
        removeActivCategory()
        const target = e.target;
        target.classList.add('activ')
        
            getGenerateImg(target.getAttribute('data-aria'))
    }
    

    const  getGenerateImg = (value) =>{
        const str = value.toLowerCase();
        sectionImg.innerHTML=""
        let listImg = '';
    
        for(let i = 1; i <=imgSetting[str].count; i++){
               listImg += `
                <div class="portfolio__img">
                    <img src='img/portfolio/${imgSetting[str].path}/${i}.png' >
                </div>
            `
        }
            sectionImg.insertAdjacentHTML('afterbegin', listImg)
    }

    const removeActivCategory = ()=>{
        navPortfolio.forEach(elem => elem.classList.remove('activ'))
    }
    
    
    
    navPortfolio.forEach(elem=>{
        elem.addEventListener('click', getPortfolioCategory)
    })
    getGenerateImg('winter')
}



export default getPortfolio;