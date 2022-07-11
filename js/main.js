const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const topBar = document.querySelector('.main') 
toggle.addEventListener('click', ()=>{
    const title = document.querySelectorAll('.navigation ul li .title')
    const icon = document.querySelectorAll('.navigation ul li .icon')
    title.forEach((item)=>{
        item.classList.toggle('hidden')
    })
    icon.forEach((item)=>{
        item.classList.toggle('icon-big')
    })
    navigation.classList.toggle('toggle-menu')
    topBar.classList.toggle('toggle-bar')
})
window.addEventListener('resize', ()=>{
    let innerWidth = window.innerWidth
    if(innerWidth <= 874){
        navigation.classList.add('hidden-navigation')
        topBar.classList.add('full-main')
    }
    else {
        navigation.classList.remove('hidden-navigation')
        topBar.classList.remove('full-main')
    }
})