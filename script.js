gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1",{opacity:0,y:40,duration:1});
gsap.from(".hero p",{opacity:0,y:40,duration:1,delay:.3});
gsap.from(".hero img",{opacity:0,scale:.9,duration:1.2,delay:.6});

gsap.utils.toArray("section").forEach(section=>{
  gsap.from(section,{
    scrollTrigger:{
      trigger:section,
      start:"top 80%"
    },
    opacity:0,
    y:50,
    duration:1
  });
});
