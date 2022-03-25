
const modals = () => {
    const btnOpenModal = document.querySelector('.hero__btn');
    let overflowCloseModal = null;

    const closeModal =(e)=>{
        const target = e.target;
        if(target.classList.contains('overflow') || target.classList.contains('modal-close')){
            overflowCloseModal.classList.remove('activ')
        }
    }

    const getBtnModal = ()=>{
        overflowCloseModal = document.querySelector('.overflow');
        overflowCloseModal.addEventListener('click', closeModal)
        overflowCloseModal.classList.add('activ')

    }

    const createModal = (value) => {
        return `
            <div class="overflow ">
                <div class="modal">
                    <h3 class="hello-user">${value}</h3>
                    <span class="modal-close">X</span>
                </div>
            </div>
        `
    }


    btnOpenModal.addEventListener('click', (e) => {
        getBtnModal()
     })

     const modalHtml = createModal('Hello Dima');
     document.body.insertAdjacentHTML('beforeend', modalHtml)
}


export default modals;