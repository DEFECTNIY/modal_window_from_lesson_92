const btn = document.querySelector('.btn--open');
const madal = document.querySelector('.madal');
const body = document.body;
const closeMadal = () => {
  madal.classList.remove('madal--open')
  body.classList.remove('body--fixed')
}  
const openMadal = () => {
  madal.classList.add('madal--open')
  body.classList.add('body--fixed')
}  

btn.addEventListener('click',openMadal)

madal.addEventListener('click',event =>{
  const target = event.target
  if (target && target.classList.contains('madal')|| target.classList.contains('madal__btn--close')){
    closeMadal()
  }
})

document.addEventListener('keydown', event =>{
  if(event.code === 'Escape'){
    closeMadal()
  }
})
