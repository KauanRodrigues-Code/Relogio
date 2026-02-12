gsap.registerPlugin(ScrollTrigger);

// Hero
gsap.from(".hero-content",{opacity:0,y:80,duration:1.5,ease:"power4.out"});
gsap.from(".watch-main",{opacity:0,x:100,duration:1.5});
gsap.from(".watch-side",{opacity:0,x:-100,duration:1.5,delay:.3});

// Reveal Sections
gsap.utils.toArray(".reveal").forEach((el)=>{
  gsap.to(el,{
    scrollTrigger:{
      trigger:el,
      start:"top 85%"
    },
    opacity:1,
    y:0,
    duration:1.2,
    ease:"power3.out"
  });
});

// Counters
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
  ScrollTrigger.create({
    trigger:counter,
    start:"top 80%",
    onEnter:()=>{
      let target=+counter.getAttribute("data-target");
      let count=0;
      let increment=target/60;

      let update=()=>{
        count+=increment;
        if(count<target){
          counter.innerText=Math.floor(count);
          requestAnimationFrame(update);
        }else{
          counter.innerText=target;
        }
      };
      update();
    }
  });
});