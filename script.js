
const linkContainer=document.querySelector('.linkContainer')

const allLInks= document.querySelectorAll('a')


allLInks.forEach(a=>a.addEventListener('mouseenter',()=>{a.classList.add('active')}))
allLInks.forEach(a=>a.addEventListener('mouseleave',()=>{a.classList.remove('active')}))