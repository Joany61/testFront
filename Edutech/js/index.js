var preloader = document.getElementById('loading')
document.addEventListener("DOMContentLoaded", ()=>{
    preloader.style.display = 'none';
})

var ind = 0
document.getElementById('icon_resp').addEventListener("click", () =>{
    document.getElementById('ul_nav').classList.toggle('show')
    if (ind == 0){
        document.getElementById('img_icon_resp').setAttribute('src','img/close_FILL0_wght400_GRAD0_opsz24.svg');
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
        document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
        ind = 1;
    }
    else if(ind == 1) {
        document.getElementById('img_icon_resp').setAttribute('src','img/menu_FILL0_wght400_GRAD0_opsz24.svg');
        document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        document.getElementsByTagName('html')[0].style.overflowY = 'auto'
        document.getElementById('ul_nav').style.overflow = 'hidden'
        ind = 0;
    }
})

const ratio = .50
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

function handleIntersect(entries, observer){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            // var target = document.querySelectorAll('.chiffre')[2].textContent
            // document.querySelectorAll('.chiffre')[2].textContent = 0;
            // var num = 0
            // var interval = setInterval(function() {
            //     document.querySelectorAll('.chiffre')[2].textContent = num;
            //     if (target == 0) clearInterval(interval);
            //     num++;
            //     target--;
            // }, 30);
            observer.unobserve(entry.target)
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal_"]').forEach((r)=>{
    observer.observe(r)
})