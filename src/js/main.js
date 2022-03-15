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
            this.logoBurger=document.querySelector('.burger__logo');
            this.blackBackground=document.querySelector('.header--background');
            this.burger();
        },
        burger(){
            this.eMain.classList.add("burger__menu");
            document.addEventListener("click", (event)=>{
                if (event.target.closest(".burger__button")||(event.target.closest('.header__top'))){
                    this.logoBurger.classList.remove('visually-hidden');
                    this.blackBackground.classList.add('black')
                    this.eMain.classList.remove("burger__menu--open");

                }
                else {
                    this.logoBurger.classList.add('visually-hidden');
                    this.eMain.classList.add("burger__menu--open");
                    this.blackBackground.classList.remove('black')

                }

            })
        }
    }
        BurgerMenu.init();

function elementPosition (a) {
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

    /*console.log("test");
    let positions = elementPosition(beforFooter);
    beforFooter.style.marginBottom = `${footer.clientHeight - (window.scrollY-positions.clientY)}px`;
    console.table({
        "hauteur de l'element footer":footer.clientHeight,
        "Postition de la fenetre": window.scrollY,
        "Position verticale dans du feedback": positions.clientY,
    });*/
});
