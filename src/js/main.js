const options = {
    root:null,
    rootMargin: '0px',
    threshold: 0.5
}
const targets = document.querySelectorAll('.no-js')
function hidden(){
    targets.forEach(target =>{
        target.classList.add('reveal');
    })

}
hidden();
const observer = new IntersectionObserver(callback, options);
function callback(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle('active');
            observer.unobserve(entry.target);
        }});
}


for (const target of targets) {
    observer.observe(target);
}

    const BurgerMenu = {
        init(){
            this.eMain = document.querySelector(".header__top");
            this.eMain.classList.add("top");
            document.querySelector(".header__logo").addEventListener("click", ()=>{
                this.eMain.classList.toggle("top");
            })
        },
    }
    BurgerMenu.init();