/*const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });*/
  
var main = document.querySelector("#main");
var crsr = document.querySelector("#minicircle");
var imgdiv = document.querySelectorAll(".element");
function movecursor(xscale,yscale){

window.addEventListener("mousemove",function(e){
    crsr.style.opacity = "1"
    crsr.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
main.addEventListener("mouseleave",function(){
    crsr.style.opacity = "0"
});
});
};


function firstpageAnim(){
    var tl = gsap.timeline();

    tl.from("#navbar",{
        y:"-10",
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    
    tl.to(".boundingelem",{
        y:"0",
        duration: 1.5,
        delay:-1,
        ease: Expo.easeOut,
        stagger: 0.3,
})
tl.to(".boundingelemfoot",{
    y:"0",
    duration: 1.5,
    delay:-1,
    ease: Expo.easeOut,
    stagger: 0.3,

})
}

function floatimg(){

imgdiv.forEach((elem) => {
    var prevclientX = 0;

    elem.addEventListener("mousemove",function(details){

        var rotdiff = details.clientX - prevclientX;
        prevclientX = details.clientX;
        var diff = details.clientY - elem.getBoundingClientRect().top;

        console.log(details.clientX)
        gsap.to(elem.querySelector("img"),{
            opacity : "1",
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate : gsap.utils.clamp(-20,20,rotdiff*0.8),
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.querySelector("img"),{
            opacity : "0",
            ease: Power3,
        })
    })
});
}


firstpageAnim();
movecursor();
floatimg();