window.addEventListener('scroll',()=>{
    document.querySelector('.nav_container').classList.toggle('window-scroll',scrollY>0)
})