const switchTheme = () =>{
    const html = document.querySelector('html')
    html.classList.add('dark')
    const switchBtn = document.querySelector('.switch-theme');



    const getLocalStorageTheme = ()=>{
        const local = localStorage.getItem('theme')
        if(local){
            const parseTheme = JSON.parse(local)
            addActivClassTheme(parseTheme)
        }else{
            addActivClassTheme('moon')
        }
    }

    const saveLocalStorage = (value) =>{
        localStorage.setItem('theme', JSON.stringify(value))
    }

    switchBtn.addEventListener('click', (e)=>{
        const target = e.target.getAttribute('data-theme');
        let reversTheme = null;

        if(target === 'sun'){
            reversTheme = 'moon';
        }else{
            reversTheme = 'sun';
        }

        saveLocalStorage(reversTheme)
        addActivClassTheme(reversTheme)
    })

    const removeActivClassTheme = (value)=>{
            switchBtn.classList.remove(value);
    }



    const addActivClassTheme = (value)=>{

        let reversTheme = value === 'moon' ? 'sun' : 'moon';

        removeActivClassTheme(value);

        switchBtn.setAttribute('data-theme', value)
        switchBtn.classList.add(reversTheme);

        html.classList.remove(reversTheme);
        html.classList.add(value)

    }



    getLocalStorageTheme()
}


export default switchTheme;