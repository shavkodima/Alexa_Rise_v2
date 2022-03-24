import i18Obj from './translate'

const switchTranslate = () => {

    const switchLang = document.querySelectorAll('.lang');

    const getLocalStorageLang = ()=>{
        const language = localStorage.getItem('lang');
        if(language){
            const parseLang = JSON.parse(language)
            translate(parseLang)
            switchLang.forEach(el => {
                el.getAttribute('data-lang') === parseLang ? setActivClassLang(el):null
            })
        }
    }

    const saveLocalStorage = (value)=>{
        localStorage.setItem('lang', JSON.stringify(value))
    }

    const handlerLanguage = (e)=>{
        e.preventDefault()
        const target = e.target;
        const getLang = target.getAttribute('data-lang');
        setActivClassLang(target)
        if (getLang === 'ru') {
            translate(getLang)
            saveLocalStorage(getLang)
        } else {
            translate(getLang)
            saveLocalStorage(getLang)
        }
    }

    switchLang.forEach((elem) => {
        elem.addEventListener('click', handlerLanguage)
    })
    
    const setActivClassLang = (target)=>{
        removeActivSwitchLang()
        target.classList.add('activ')
    }

    const translate = (lang  = 'en') => {

        const langValue = i18Obj[lang]

        for (let key in langValue) {
            const all = document.querySelectorAll(`.${key}`)
            if (all.length > 1) {
                all.forEach((elem) => {
                    elem.textContent = langValue[key];
                })
            } else {
                document.querySelector(`.${key}`).textContent = langValue[key]
            }
        }
    }

    const removeActivSwitchLang = () => {
        switchLang.forEach((elem) => {
            elem.classList.remove('activ')
        })
    }

    getLocalStorageLang()

}

export default switchTranslate;
