
const linkContainer=document.querySelector('.linkContainer')

const allLInks= document.querySelectorAll('a')


allLInks.forEach(a=>a.addEventListener('mouseenter',()=>{a.parentElement.classList.add('active')}))
allLInks.forEach(a=>a.addEventListener('mouseleave',()=>{a.parentElement.classList.remove('active')}))