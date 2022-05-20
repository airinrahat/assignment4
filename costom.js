window.addEventListener("scroll",function(){
    var header=this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
var section = document.querySelector('section');
window.addEventListener('scroll',function(){
    var value = window.scrollY;
    section.style.clipPath = "circle("+value+ "px at center)"

});