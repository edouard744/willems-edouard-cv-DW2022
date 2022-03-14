const options = {
    root:null,
    rootMargin: '0px',
    threshold: 0.5
}
const targets = document.querySelectorAll('.no-js');
const footer= document.querySelector('.footer');
window.addEventListener('scroll',()=>{
})
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
            this.mainLogo= document.querySelector('.header__logo');
            this.logoBurger=document.querySelector('.burger__logo');
            this.close= document.querySelector('body:not(.header__top)');
            this.eMain.classList.add("burger__menu");
            this.eMain.classList.add("burger__menu--open");
            document.querySelector(".burger__button").addEventListener("click", ()=>{
                this.logoBurger.classList.toggle('visually-hidden');
                this.eMain.classList.toggle("burger__menu--open");
            })
        },
    }
    BurgerMenu.init();

/*function elementPosition (a) {
    let b = a.getBoundingClientRect();
    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop,
        viewportX: (b.x || b.left),
        viewportY: (b.y || b.top)
    }
}
let beforFooter = document.querySelector('.feedback');
let svgAnimation= document.querySelector('.svg__animation');
window.addEventListener('scroll', function() {
    svgAnimation.style.transform = `translate(${-window.scrollY/2}px,0)`  ;
    console.log("test");
    let positions = elementPosition(beforFooter);
    beforFooter.style.marginBottom = `${footer.clientHeight - (window.scrollY-positions.clientY)}px`;
    console.table({
        "hauteur de l'element footer":footer.clientHeight,
        "Postition de la fenetre": window.scrollY,
        "Position verticale dans du feedback": positions.clientY,
    });

});*/
