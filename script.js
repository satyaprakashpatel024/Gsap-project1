var tl = gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.2
})


tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:.5,
    stagger:0.5,
})