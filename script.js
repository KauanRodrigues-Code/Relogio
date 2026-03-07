window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1200);

});

/* SCROLL ANIMATION */

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let elementVisible=150;

if(elementTop<windowHeight-elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

/* PARALLAX */

window.addEventListener("scroll",function(){

const bg=document.querySelector(".parallax-bg");

let offset=window.scrollY;

bg.style.transform="translateY("+offset*0.4+"px)";

});

/* PARTICLES */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2+1,
speedX:Math.random()*0.5-0.25,
speedY:Math.random()*0.5-0.25
});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.speedX;
p.y+=p.speedY;

if(p.x<0||p.x>canvas.width)p.speedX*=-1;
if(p.y<0||p.y>canvas.height)p.speedY*=-1;

ctx.fillStyle="red";

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();