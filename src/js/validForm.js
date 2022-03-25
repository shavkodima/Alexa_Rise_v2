const validForm = () =>{
    const forms = document.querySelector('.forms');


    const validInput = (form)=>{
        let flag = true;
        for(let i =0; i<form.length -1; i++){
            if(!form[i].value){
                form[i].classList.add('error-valid')
                flag = false;
            }else{
                form[i].classList.remove('error-valid')
            }
        }
    
        return flag;
    }
    
    forms.addEventListener('click', (e)=>{
        const target = e.target;
        if(target.classList.contains('submit-form')){
            e.preventDefault()
                if(validInput(forms.elements)){
                    alert("Форма заполнена");
                    forms.reset()
                }
            }
    })
    
}


export default validForm;