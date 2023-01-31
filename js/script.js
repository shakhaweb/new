let btn = document.querySelector('.btn')
let modal_d = document.querySelector('.modal')

let modal =()=>{
    modal_d.classList.add('activ')
    console.log('hello');
}
btn.addEventListener('click',modal)
